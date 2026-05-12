import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Block from "~/components/Block";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import { Button } from "~/components/ui/button";
import useSanityFetch from "~/hooks/useSanityFetch";

type AboutData = {
  dasacBio?: unknown;
  dasacLink?: string;
};

const DasacSection = () => {
  const theme = useTheme();

  const { data: about } = useSanityFetch<AboutData>(
    "*[_type == \"about\"][0]{ dasacBio, dasacLink }"
  );

  return (
    <Section bgColor={theme.palette.secondary}>
      <Heading
        color={theme.palette.secondary}
        subtitle="The organisers"
        title="DASAC"
      />
      <Stack alignItems="center" spacing={2}>
        {
          about?.dasacBio &&
                    <div>
                      <Block value={about.dasacBio as never} />
                    </div>
        }
        {
          about?.dasacLink &&
                    <Button
                      href={about.dasacLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                        Learn more about DASAC
                    </Button>
        }
      </Stack>
    </Section>
  );
};

export default DasacSection;
