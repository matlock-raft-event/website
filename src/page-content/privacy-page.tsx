import type { ReactNode } from "react";

import Footer from "~/components/footer";
import Heading from "~/components/heading";
import PageShell from "~/components/page-shell";
import Section from "~/components/section";
import Waves from "~/components/waves";
import InnerHeroSection from "~/sections/inner-hero-section";

const Subheading = ({ children }: { children: string }) => (
  <h3 className="font-display font-bold text-xl md:text-2xl mt-8 first:mt-0">
    {children}
  </h3>
);

const Para = ({ children }: { children: ReactNode }) => (
  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-3">
    {children}
  </p>
);

const Content = () => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Privacy policy" />
    <Section palette="cream">
      <Heading palette="cream" subtitle="Your data and your rights" title="Privacy Policy" />
      <div className="mx-auto w-full max-w-4xl px-4">
        <Para>
          This privacy policy explains how Dasac&apos;s Matlock Raft Event (&quot;we&quot;,
          &quot;us&quot;) handles personal information when you visit this website or take part in
          the event. We are a volunteer-run charity event raising money for the Royal National
          Lifeboat Institution (RNLI). We only collect the information we need to run the event and
          we never sell it.
        </Para>

        <Subheading>Information we collect</Subheading>
        <Para>
          You can browse this website without giving us any personal information. We collect
          personal details only when you choose to give them to us — for example, when you complete
          a raft entry / application form, volunteer to help, or contact us. This may include your
          name, contact details and team information.
        </Para>

        <Subheading>How we use your information</Subheading>
        <Para>
          We use the information you provide solely to organise and run the raft event — for
          example, to process your raft entry, to keep participants and volunteers informed, and to
          respond to your enquiries. We will only contact you about the event.
        </Para>

        <Subheading>Cookies and analytics</Subheading>
        <Para>
          Details of any cookies used by this website are set out in our
          {" "}
          <a className="text-raft hover:underline" href="/cookies">Cookies Policy</a>
          .
        </Para>

        <Subheading>Third-party services</Subheading>
        <Para>
          Some parts of this site rely on third parties who have their own privacy policies: online
          donations and our event page are hosted on Facebook; the &quot;Vote for your boat&quot;
          poll is provided by StrawPoll; and our photo gallery and content are managed through our
          content system. Following links to these services means your information is handled under
          their policies.
        </Para>

        <Subheading>Your rights</Subheading>
        <Para>
          Under UK data protection law you have the right to ask for a copy of the personal
          information we hold about you, to have it corrected or deleted, and to object to how we
          use it. To make a request, please get in touch via our
          {" "}
          <a className="text-raft hover:underline" href="/contact">contact page</a>
          .
        </Para>

        <Subheading>Changes to this policy</Subheading>
        <Para>
          We may update this policy from time to time. Any changes will be published on this page.
        </Para>
      </div>
    </Section>
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
    <Footer />
  </main>
);

const PrivacyPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default PrivacyPage;
