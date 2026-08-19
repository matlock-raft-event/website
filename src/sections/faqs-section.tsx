import { useMemo, useState } from "react";

import Block from "~/components/block";
import Heading from "~/components/heading";
import Section from "~/components/section";
import Accordion from "~/components/ui/accordion/accordion";
import AccordionContent from "~/components/ui/accordion/accordion-content";
import AccordionItem from "~/components/ui/accordion/accordion-item";
import AccordionTrigger from "~/components/ui/accordion/accordion-trigger";
import { Button } from "~/components/ui/button";
import type { FaqsQueryResult } from "~/lib/sanity.types";

type Props = { faqs: FaqsQueryResult };

const AUDIENCE_ORDER = ["general", "participants", "spectators", "volunteers", "sponsors"] as const;

const AUDIENCE_LABELS: Record<string, string> = {
  general: "General",
  participants: "Participants",
  spectators: "Spectators",
  volunteers: "Volunteers",
  sponsors: "Sponsors"
};

const getAudience = (faq: unknown): string => {
  const audience = (faq as { audience?: string }).audience;
  return audience && AUDIENCE_LABELS[audience] ? audience : "general";
};

const FaqsSection = ({ faqs }: Props) => {
  const items = useMemo(() => faqs ?? [], [faqs]);
  const [active, setActive] = useState<string>("all");

  const available = useMemo(() => {
    const present = new Set(items.map(getAudience));
    return AUDIENCE_ORDER.filter(audience => present.has(audience));
  }, [items]);

  const filtered = active === "all"
    ? items
    : items.filter(faq => getAudience(faq) === active);

  return (
    <Section palette="cream">
      <Heading
        palette="cream"
        subtitle="You asked, we answered!"
        title="Frequently Asked Questions"
      />
      <div className="mx-auto w-full max-w-4xl px-4">
        {
          available.length > 1 && (
            <div
              aria-label="Filter questions by audience"
              className="flex flex-row flex-wrap justify-center gap-2 pb-6"
              role="group"
            >
              <Button
                aria-pressed={active === "all"}
                color="raft"
                onClick={() => setActive("all")}
                size="sm"
                variant={active === "all" ? "solid" : "outline"}
              >
                All
              </Button>
              {
                available.map(audience => (
                  <Button
                    aria-pressed={active === audience}
                    color="raft"
                    key={audience}
                    onClick={() => setActive(audience)}
                    size="sm"
                    variant={active === audience ? "solid" : "outline"}
                  >
                    {AUDIENCE_LABELS[audience]}
                  </Button>
                ))
              }
            </div>
          )
        }
        <Accordion>
          {
            filtered.map(faq => (
              <AccordionItem key={faq.question} value={faq.question ?? ""}>
                <AccordionTrigger className="text-cream-contrast font-display text-xl py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer ? <Block value={faq.answer as never} /> : null}
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </div>
    </Section>
  );
};

export default FaqsSection;
