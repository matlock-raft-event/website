import type { ComponentProps } from "react";

import Separator from "~/components/ui/separator/separator";
import { cn } from "~/lib/utils";

const ItemSeparator = ({
  className,
  ...props
}: ComponentProps<typeof Separator>) => (
  <Separator
    data-slot="item-separator"
    orientation="horizontal"
    className={cn("my-2", className)}
    {...props}
  />
);

export default ItemSeparator;
