import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "~/lib/utils";

const DrawerTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) => (
  <DrawerPrimitive.Title
    data-slot="drawer-title"
    className={cn("text-sm font-medium text-foreground", className)}
    {...props}
  />
);

export default DrawerTitle;
