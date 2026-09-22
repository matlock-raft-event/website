import type { ComponentProps } from "react";

import { cn } from "~/lib/utils";

const ItemTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="item-title"
    className={cn(
      "line-clamp-1 flex w-fit items-center gap-2 text-xs font-medium underline-offset-4",
      className,
    )}
    {...props}
  />
);

export default ItemTitle;
