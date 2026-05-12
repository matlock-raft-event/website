import Block from "~/components/Block";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import Accordion from "~/components/ui/accordion/accordion";
import AccordionContent from "~/components/ui/accordion/accordion-content";
import AccordionItem from "~/components/ui/accordion/accordion-item";
import AccordionTrigger from "~/components/ui/accordion/accordion-trigger";
import useSanityFetch from "~/hooks/useSanityFetch";

type Faq = {
  question?: string;
  answer?: unknown;
};

const FaqsSection = () => {
  const { data: faqs } = useSanityFetch<Faq[]>(
    "*[_type == \"faq\"]{ question, answer }"
  );

  return (
    <Section palette="cream">
      <Heading
        palette="cream"
        subtitle="You asked, we answered!"
        title="Frequently Asked Questions"
      />
      <div className="mx-auto w-full max-w-4xl px-4">
        <Accordion>
          {
            (faqs ?? []).map(faq => (
              <AccordionItem key={faq.question} value={faq.question}>
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
