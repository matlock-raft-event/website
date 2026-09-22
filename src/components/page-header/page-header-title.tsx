import type { VariantProps } from "class-variance-authority";

import pageHeaderTitleVariants from "./page-header-title-variants";

type TitleSize = NonNullable<VariantProps<typeof pageHeaderTitleVariants>["size"]>;

const sizeFor = (title: string): TitleSize => {
  if (title.length <= 20) return "default";
  if (title.length <= 26) return "long";
  return "extra-long";
};

const PageHeaderTitle = ({ children }: { children: string }) => (
  <h1 className={pageHeaderTitleVariants({ size: sizeFor(children) })}>
    {children}
  </h1>
);

export default PageHeaderTitle;
