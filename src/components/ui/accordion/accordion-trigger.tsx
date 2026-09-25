import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";

import { cn } from "~/lib/utils";

type AccordionTriggerProps = AccordionPrimitive.Trigger.Props & {
  /** The level the question sits at: 2 when the accordion IS the page (FAQs),
      3 under a section heading. base-ui's Header renders an h3 otherwise. */
  headingLevel?: 2 | 3;
};

const AccordionTrigger = ({
  className,
  children,
  headingLevel = 3,
  ...props
}: AccordionTriggerProps) => (
  <AccordionPrimitive.Header className="flex" render={headingLevel === 2 ? <h2 /> : <h3 />}>
    <AccordionPrimitive.Trigger
      className={cn(
        "group/accordion-trigger relative flex flex-1 items-center justify-between rounded-none border border-transparent py-2.5 text-left text-xs font-medium transition-all hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--surface-focus) aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
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
