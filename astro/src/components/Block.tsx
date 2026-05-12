/* eslint react/no-unstable-nested-components: 0 */
/* eslint @typescript-eslint/no-explicit-any: 0 */

import { Typography } from "@mui/material";
import type { PortableTextProps } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock, TypedObject } from "@portabletext/types";

const Block = <B extends TypedObject = PortableTextBlock>({ value, components, ...rest }: PortableTextProps<B>) => {
  const blockComponents = {
    block: {
      h1: ({ children }: any) => <Typography my={1} variant="h1">{children}</Typography>,
      h2: ({ children }: any) => <Typography my={1} variant="h2">{children}</Typography>,
      h3: ({ children }: any) => <Typography my={1} variant="h3">{children}</Typography>,
      h4: ({ children }: any) => <Typography my={1} variant="h4">{children}</Typography>,
      h5: ({ children }: any) => <Typography my={1} variant="h5">{children}</Typography>,
      h6: ({ children }: any) => <Typography my={1} variant="subtitle1">{children}</Typography>,
      normal: ({ children }: any) => <Typography mb={1} variant="body1">{children}</Typography>
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
