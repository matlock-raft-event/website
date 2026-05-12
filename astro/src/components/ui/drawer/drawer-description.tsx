import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "~/lib/utils";

const DrawerDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) => (
  <DrawerPrimitive.Description
    data-slot="drawer-description"
    className={cn("text-xs/relaxed text-muted-foreground", className)}
    {...props}
  />
);

export default DrawerDescription;
