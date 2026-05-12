import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import PageShell from "~/components/PageShell";
import Section from "~/components/Section";
import Waves from "~/components/Waves";
import InnerHeroSection from "~/sections/InnerHeroSection";

const Content = () => (
  <main>
    <InnerHeroSection />
    <Section palette="cream">
      <Heading
        palette="cream"
        subtitle="It's time to choose your favourite"
        title="Vote For Your Boat"
      />
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        Okay, maybe it&apos;s generous of us to call them boats... But for the first time in
                        2023,
          {" "}
          <strong>YOU</strong>
          {" "}
                        can vote for your winner of The Matlock Raft Event! This is your
                        opportunity to be part of the action and help us to crown this years triumphant raft. Every vote
                        counts!
        </p>
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
            id="strawpoll_iframe_kjn18NeWjyQ"
            src="https://strawpoll.com/embed/kjn18NeWjyQ"
            style={{
              position: "static",
              visibility: "visible",
              display: "block",
              width: "100%",
              flexGrow: 1,
              border: 0
            }}
            title="StrawPoll Embed"
          >
                            Loading...
          </iframe>
          <script async src="https://cdn.strawpoll.com/dist/widgets.js" />
        </div>
      </div>

    </Section>
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" />
    <Footer />
  </main>
);

const VotePage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default VotePage;
