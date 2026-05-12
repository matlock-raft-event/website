import { Container, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Block from "~/components/Block";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import { Button } from "~/components/ui/button";
import useSanityFetch from "~/hooks/useSanityFetch";

type AboutData = {
  rnliBio?: unknown;
  rnliLink?: string;
};

const RnliSection = () => {
  const theme = useTheme();

  const { data: about } = useSanityFetch<AboutData>(
    "*[_type == \"about\"][0]{ rnliBio, rnliLink }"
  );

  return (
    <Section bgColor={theme.palette.primary}>
      <Heading
        color={theme.palette.primary}
        subtitle="Saving lives at sea with your support"
        title="RNLI"
      />
      <Stack alignItems="center" spacing={2}>
        {
          about?.rnliBio &&
                    <Container maxWidth="md">
                      <Block value={about.rnliBio as never} />
                    </Container>
        }
        {
          about?.rnliLink &&
                    <Button
                      href={about.rnliLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                        Learn more about the RNLI
                    </Button>
        }
      </Stack>
    </Section>
  );
};

export default RnliSection;
