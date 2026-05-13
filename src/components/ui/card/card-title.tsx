import type { ComponentProps } from "react";

import { cn } from "~/lib/utils";

const CardTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-title"
    className={cn(
      "text-sm font-medium group-data-[size=sm]/card:text-sm",
      className,
    )}
    {...props}
  />
);

export default CardTitle;
