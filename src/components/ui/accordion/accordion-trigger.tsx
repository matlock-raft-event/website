import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";

import { cn } from "~/lib/utils";

const AccordionTrigger = ({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        "group/accordion-trigger relative flex flex-1 items-center justify-between rounded-none border border-transparent py-2.5 text-left text-xs font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
        className
      )}
      data-slot="accordion-trigger"
      {...props}
    >
      {children}
      <CaretDownIcon
        className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
        data-slot="accordion-trigger-icon"
      />
      <CaretUpIcon
        className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
        data-slot="accordion-trigger-icon"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

export default AccordionTrigger;
