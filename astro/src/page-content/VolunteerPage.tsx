import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import PageShell from "~/components/PageShell";
import Section from "~/components/Section";
import Waves from "~/components/Waves";
import InnerHeroSection from "~/sections/InnerHeroSection";

const Content = () => {
  const theme = useTheme();
  return (
    <main>
      <InnerHeroSection />
      <Section bgColor={theme.palette.secondary}>
        <Heading color={theme.palette.secondary} subtitle="How to help out" title="Volunteer" />
        <Container maxWidth="md">
          <Typography variant="subtitle1">
                        Safety Marshalls
          </Typography>
          <Typography variant="body1">
                        The Matlock Raft Event is a fun event for all the family on Boxing Day. However, the negative
                        effects on the environment that this level of spectatorship and the active involvement of the
                        spectators has must be seriously considered.
          </Typography>
          <Typography variant="body1">
                        Spectators have often been known to playfully throw flour and eggs at raft participants in the
                        past.
                        While this appears to be great fun, it&apos;s important to note that plastic bags can be harmful
                        to
                        the watercourse and eggs pose risks to our participants. Both the environment agency and council
                        are
                        closely monitoring the situation, and we&apos;re taking steps to ensure safety and environmental
                        responsibility.
          </Typography>
          <Typography variant="body1">
                        To keep the event thriving, we&apos;re expanding our team of Marshalls to enhance safety and
                        enjoyment.
          </Typography>
          <Typography variant="body1">
                        As a safety marshall, you will be responsible to:
          </Typography>
          <ul>
            <li>
                            Monitor spectators and participants to ensure adherence to safety guidelines and
                            environmental regulations.
            </li>
            <li>
                            Direct spectators along the route where required.
            </li>
          </ul>
          <Typography variant="body1">
                        Join us in ensuring a fantastic experience for everyone at our event. You&apos;ll
                        receive £35 to cover your expenses.
          </Typography>
          <Typography variant="body1">
                        Contact Terry via
            {" "}
            <a href="mailto:a@a.com">email</a>
            {" "}
                        for more information.
          </Typography>

          <br />

          <Typography variant="subtitle1">
                        Donation Collectors
          </Typography>
          <Typography variant="body1">
                        We’ve already raised over £250,000 for the RNLI. Can you spare us a day to help us collect the
                        donations from the spectators, families and groups of friends?
          </Typography>
          <Typography variant="body1">
                        As a donation collector, you will be responsible to:
          </Typography>
          <ul>
            <li>
                            Be a friendly face, collecting donations from spectators along the route.
            </li>
          </ul>
          <Typography variant="body1">
                        Contact Terry via
            {" "}
            <a href="mailto:a@a.com">email</a>
            {" "}
                        for more information.
          </Typography>
        </Container>
      </Section>
      <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.secondary.main} variant={2} />
      <Footer />
    </main>
  );
};

const VolunteerPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default VolunteerPage;
