/* eslint react/no-unstable-nested-components: 0 */
/* eslint @typescript-eslint/no-explicit-any: 0 */

import type { PortableTextProps } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock, TypedObject } from "@portabletext/types";

/* The look of each heading style stays whatever the editor picked; only the
   tag moves, so the page's ladder holds no matter what they picked. */
const HEADING_CLASS: Record<string, string> = {
  h1: "my-2 font-display uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight",
  h2: "my-2 font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight",
  h3: "my-2 font-bold text-2xl md:text-3xl",
  h4: "my-2 font-bold text-xl md:text-2xl",
  h5: "my-2 font-bold text-lg md:text-xl"
};

type BlockProps<B extends TypedObject> = PortableTextProps<B> & {
  /** The level the shallowest heading in this content should render at: 2 when
      the block is the page's body, 3 under a section heading, 4 inside a card.
      Everything below it steps down from there, so an editor who starts at h3
      or h4 still can't make the page skip a level. */
  startLevel?: 2 | 3 | 4;
};

const Block = <B extends TypedObject = PortableTextBlock>({
  value,
  components,
  startLevel = 3,
  ...rest
}: BlockProps<B>) => {
  const blocks = Array.isArray(value) ? value : [value];
  const depths = blocks
    .map((block: any) => block?.style)
    .filter((style: unknown): style is string => typeof style === "string" && /^h[1-5]$/.test(style))
    .map((style: string) => Number(style.slice(1)));
  const offset = startLevel - (depths.length ? Math.min(...depths) : startLevel);

  const heading = (style: string) => {
    const Tag = `h${Math.min(6, Math.max(2, Number(style.slice(1)) + offset))}` as "h2";

    return ({ children }: any) => <Tag className={HEADING_CLASS[style]}>{children}</Tag>;
  };

  const blockComponents = {
    block: {
      h1: heading("h1"),
      h2: heading("h2"),
      h3: heading("h3"),
      h4: heading("h4"),
      h5: heading("h5"),
      h6: ({ children }: any) => <p className="my-2 font-display uppercase text-base">{children}</p>,
      normal: ({ children }: any) => <p className="mb-2 text-sm sm:text-base leading-relaxed">{children}</p>
    },

    list: {
      bullet: ({ children }: any) => <ul className="my-2 ml-6 list-disc text-sm sm:text-base lg:text-lg leading-relaxed">{children}</ul>,
      number: ({ children }: any) => <ol className="my-2 ml-6 list-decimal text-sm sm:text-base lg:text-lg leading-relaxed">{children}</ol>
    },

    listItem: {
      bullet: ({ children }: any) => <li className="mb-1 text-sm sm:text-base">{children}</li>,
      number: ({ children }: any) => <li className="mb-1 text-sm sm:text-base">{children}</li>
    },

    marks: {
      internalLink: ({ value: val, children }: any) => {
        const { slug = {} } = val;
        const href = `/${slug.current}`;
        return (
          <a className="text-(--surface-link) underline hover:text-(--surface-link-hover)" href={href}>{children}</a>
        );
      },
      link: ({ value: val, children }: any) => {
        const { blank, href } = val;
        return blank
          ? <a className="text-(--surface-link) underline hover:text-(--surface-link-hover)" href={href} rel="noopener noreferrer" target="_blank">{children}</a>
          : <a className="text-(--surface-link) underline hover:text-(--surface-link-hover)" href={href}>{children}</a>;
      },
      ...components?.marks
    }
  };

  return (
    <PortableText components={blockComponents} value={value as never} {...rest} />
  );
};

export default Block;
