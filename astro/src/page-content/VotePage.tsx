import { Typography } from "@mui/material";
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
        <Heading
          color={theme.palette.secondary}
          subtitle="It's time to choose your favourite"
          title="Vote For Your Boat"
        />
        <div className="flex flex-col items-center gap-4">
          <Typography>
                        Okay, maybe it&apos;s generous of us to call them boats... But for the first time in
                        2023,
            {" "}
            <strong>YOU</strong>
            {" "}
                        can vote for your winner of The Matlock Raft Event! This is your
                        opportunity to be part of the action and help us to crown this years triumphant raft. Every vote
                        counts!
          </Typography>
          <br />
          <div
            className="strawpoll-embed"
            id="strawpoll_kjn18NeWjyQ"
            style={{
              height: "100vh",
              width: "100%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <iframe
              allowFullScreen
              frameBorder="0"
              id="strawpoll_iframe_kjn18NeWjyQ"
              src="https://strawpoll.com/embed/kjn18NeWjyQ"
              style={{
                position: "static",
                visibility: "visible",
                display: "block",
                width: "100%",
                flexGrow: 1
              }}
              title="StrawPoll Embed"
            >
                            Loading...
            </iframe>
            <script async src="https://cdn.strawpoll.com/dist/widgets.js" />
          </div>
        </div>

      </Section>
      <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.secondary.main} />
      <Footer />
    </main>
  );
};

const VotePage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default VotePage;
