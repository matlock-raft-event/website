import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import { Para, Subheading } from "~/components/prose";
import Section from "~/components/section";

const Content = () => (
  <main id="main" tabIndex={-1}>
    <PageHeader color="cream" eyebrow="Your data and your rights" eyebrowStyle="plain" title="Privacy policy" />
    <Section color="cream" plain>
      <div className="mx-auto w-full max-w-5xl px-4">
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
          This website sets no cookies. To count visits we use Cloudflare Web Analytics, which
          records the pages viewed, the site that sent the visitor, their country, the type of
          device and browser, and how quickly each page loads. It works without cookies or any
          other storage on your device, and it does not fingerprint you or follow you across other
          sites. We use the totals to see how many people the site reaches and to keep it fast; we
          do not build a profile of you or share anything about your visit. Our
          {" "}
          <a className="text-(--surface-link) hover:underline" href="/cookies">Cookies Policy</a>
          {" "}
          sets this out in full.
        </Para>

        <Subheading>Third-party services</Subheading>
        <Para>
          Some parts of this site rely on third parties who have their own privacy policies:
          Cloudflare hosts the site and provides the visitor statistics above; online donations go
          through the fundraising platform linked from our Donate page, and our event page is on
          Facebook; and our photo gallery and content are managed through our content system.
          Following links to these services means your information is handled under their policies.
        </Para>

        <Subheading>Your rights</Subheading>
        <Para>
          Under UK data protection law you have the right to ask for a copy of the personal
          information we hold about you, to have it corrected or deleted, and to object to how we
          use it. To make a request, please get in touch via our
          {" "}
          <a className="text-(--surface-link) hover:underline" href="/contact">contact page</a>
          .
        </Para>

        <Subheading>Changes to this policy</Subheading>
        <Para>
          We may update this policy from time to time. Any changes will be published on this page.
        </Para>
      </div>
    </Section>
    <Footer waveTopColor="var(--color-cream)" />
  </main>
);

const PrivacyPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default PrivacyPage;
