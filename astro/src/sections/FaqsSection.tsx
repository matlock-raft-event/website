import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Block from "~/components/Block";
import Heading from "~/components/Heading";
import Iconify from "~/components/Iconify";
import Section from "~/components/Section";
import useSanityFetch from "~/hooks/useSanityFetch";
import { TITLE_FONT_FAMILY } from "~/theme/typography";

type Faq = {
  question?: string;
  answer?: unknown;
};

const FaqsSection = () => {
  const { data: faqs } = useSanityFetch<Faq[]>(
    "*[_type == \"faq\"]{ question, answer }"
  );

  const theme = useTheme();

  return (
    <Section bgColor={theme.palette.secondary}>
      <Heading
        color={theme.palette.secondary}
        subtitle="You asked, we answered!"
        title="Frequently Asked Questions"
      />
      <div className="mx-auto w-full max-w-4xl px-4">
        {
          (faqs ?? []).map(faq => (
            <Accordion
              key={faq.question}
              sx={{
                bgcolor: "transparent",
                boxShadow: "none"
              }}
            >
              <AccordionSummary
                aria-controls={`faq-${faq.question}-content`}
                expandIcon={<Iconify color="secondary.contrastText" icon="ph:caret-down" />}
                id={`faq-${faq.question}-header`}
              >
                <Typography
                  color="secondary.contrastText"
                  fontFamily={TITLE_FONT_FAMILY}
                  variant="h4"
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {faq.answer && <Block value={faq.answer as never} />}
              </AccordionDetails>
            </Accordion>
          ))
        }
      </div>
    </Section>
  );
};

export default FaqsSection;
