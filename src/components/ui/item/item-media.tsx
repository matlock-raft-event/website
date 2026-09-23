import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

import itemMediaVariants from "./item-media-variants";

const ItemMedia = ({
  className,
  variant = "default",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) => (
  <div
    data-slot="item-media"
    data-variant={variant}
    className={cn(itemMediaVariants({ variant, className }))}
    {...props}
  />
);

export default ItemMedia;
