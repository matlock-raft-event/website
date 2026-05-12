import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { cn } from "~/lib/utils";

const AccordionItem = ({
  className,
  ...props
}: AccordionPrimitive.Item.Props) => (
  <AccordionPrimitive.Item
    className={cn("not-last:border-b", className)}
    data-slot="accordion-item"
    {...props}
  />
);

export default AccordionItem;
