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
      <Heading palette="cream" subtitle="How to help out" title="Volunteer" />
      <div className="mx-auto w-full max-w-4xl px-4">
        <p className="font-display font-semibold text-base">
                        Safety Marshalls
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        The Matlock Raft Event is a fun event for all the family on Boxing Day. However, the negative
                        effects on the environment that this level of spectatorship and the active involvement of the
                        spectators has must be seriously considered.
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        Spectators have often been known to playfully throw flour and eggs at raft participants in the
                        past.
                        While this appears to be great fun, it&apos;s important to note that plastic bags can be harmful
                        to
                        the watercourse and eggs pose risks to our participants. Both the environment agency and council
                        are
                        closely monitoring the situation, and we&apos;re taking steps to ensure safety and environmental
                        responsibility.
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        To keep the event thriving, we&apos;re expanding our team of Marshalls to enhance safety and
                        enjoyment.
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        As a safety marshall, you will be responsible to:
        </p>
        <ul>
          <li>
                            Monitor spectators and participants to ensure adherence to safety guidelines and
                            environmental regulations.
          </li>
          <li>
                            Direct spectators along the route where required.
          </li>
        </ul>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        Join us in ensuring a fantastic experience for everyone at our event. You&apos;ll
                        receive £35 to cover your expenses.
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        Contact Terry via
          {" "}
          <a href="mailto:a@a.com">email</a>
          {" "}
                        for more information.
        </p>

        <br />

        <p className="font-display font-semibold text-base">
                        Donation Collectors
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        We’ve already raised over £250,000 for the RNLI. Can you spare us a day to help us collect the
                        donations from the spectators, families and groups of friends?
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        As a donation collector, you will be responsible to:
        </p>
        <ul>
          <li>
                            Be a friendly face, collecting donations from spectators along the route.
          </li>
        </ul>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        Contact Terry via
          {" "}
          <a href="mailto:a@a.com">email</a>
          {" "}
                        for more information.
        </p>
      </div>
    </Section>
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
    <Footer />
  </main>
);

const VolunteerPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default VolunteerPage;
