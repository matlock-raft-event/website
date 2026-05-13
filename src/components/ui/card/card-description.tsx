import type { ComponentProps } from "react";

import { cn } from "~/lib/utils";

const CardDescription = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-description"
    className={cn("text-xs/relaxed text-muted-foreground", className)}
    {...props}
  />
);

export default CardDescription;
