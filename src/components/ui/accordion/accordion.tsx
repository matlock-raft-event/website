import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { cn } from "~/lib/utils";

const Accordion = ({
  className,
  ...props
}: AccordionPrimitive.Root.Props) => (
  <AccordionPrimitive.Root
    className={cn("flex w-full flex-col", className)}
    data-slot="accordion"
    {...props}
  />
);

export default Accordion;
