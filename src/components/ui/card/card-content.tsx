import type { ComponentProps } from "react";

import { cn } from "~/lib/utils";

const CardContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-content"
    className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
    {...props}
  />
);

export default CardContent;
