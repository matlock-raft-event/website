import type { ComponentProps } from "react";

import { cn } from "~/lib/utils";

const ItemDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    data-slot="item-description"
    className={cn(
      "line-clamp-2 text-left text-xs/relaxed font-normal text-muted-foreground group-data-[size=xs]/item:text-xs/relaxed [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
      className,
    )}
    {...props}
  />
);

export default ItemDescription;
