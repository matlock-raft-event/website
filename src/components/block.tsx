/* eslint react/no-unstable-nested-components: 0 */
/* eslint @typescript-eslint/no-explicit-any: 0 */

import type { PortableTextProps } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock, TypedObject } from "@portabletext/types";

const Block = <B extends TypedObject = PortableTextBlock>({ value, components, ...rest }: PortableTextProps<B>) => {
  const blockComponents = {
    block: {
      h1: ({ children }: any) => <h1 className="my-2 font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">{children}</h1>,
      h2: ({ children }: any) => <h2 className="my-2 font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">{children}</h2>,
      h3: ({ children }: any) => <h3 className="my-2 font-bold text-2xl md:text-3xl">{children}</h3>,
      h4: ({ children }: any) => <h4 className="my-2 font-bold text-xl md:text-2xl">{children}</h4>,
      h5: ({ children }: any) => <h5 className="my-2 font-bold text-lg md:text-xl">{children}</h5>,
      h6: ({ children }: any) => <p className="my-2 font-display font-semibold text-base">{children}</p>,
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
          <a className="text-red underline hover:text-red-dark" href={href}>{children}</a>
        );
      },
      link: ({ value: val, children }: any) => {
        const { blank, href } = val;
        return blank
          ? <a className="text-red underline hover:text-red-dark" href={href} rel="noopener noreferrer" target="_blank">{children}</a>
          : <a className="text-red underline hover:text-red-dark" href={href}>{children}</a>;
      },
      ...components?.marks
    }
  };

  return (
    <PortableText components={blockComponents} value={value as never} {...rest} />
  );
};

export default Block;
