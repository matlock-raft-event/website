import type { ComponentProps } from "react";

import { cn } from "~/lib/utils";

const ItemGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    role="list"
    data-slot="item-group"
    className={cn(
      "group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
      className,
    )}
    {...props}
  />
);

export default ItemGroup;
