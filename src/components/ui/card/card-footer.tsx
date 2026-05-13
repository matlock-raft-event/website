import type { ComponentProps } from "react";

import { cn } from "~/lib/utils";

const CardFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-footer"
    className={cn(
      "flex items-center rounded-none border-t p-4 group-data-[size=sm]/card:p-3",
      className,
    )}
    {...props}
  />
);

export default CardFooter;
