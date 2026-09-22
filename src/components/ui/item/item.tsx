import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

import itemVariants from "./item-variants";

const Item = ({
  className,
  variant = "default",
  size = "default",
  render,
  ...props
}: useRender.ComponentProps<"div"> & VariantProps<typeof itemVariants>) =>
  useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(itemVariants({ variant, size, className })),
      },
      props,
    ),
    render,
    state: {
      slot: "item",
      variant,
      size,
    },
  });

export default Item;
