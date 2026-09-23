import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import { Para, Subheading } from "~/components/prose";
import Section from "~/components/section";

const Content = () => (
  <main id="main" tabIndex={-1}>
    <PageHeader backLink={{ href: "/info", label: "Event information" }} eyebrow="Know before you go" title="At the event" />
    <Section color="river" plain>
      <div className="mx-auto w-full max-w-5xl px-4">
        <Para>
          Thousands of people line the banks of the Derwent on Boxing Day to cheer the rafts on.
          Here&apos;s what to know to make the most of the day.
        </Para>

        <Subheading>Where to watch</Subheading>
        <Para>
          You can watch from anywhere along the route, but the most popular spots are Hall Leys Park
          in Matlock, the riverside through Matlock Bath, and Masson Weir, where the rafts tackle the
          white water. The finish is at Cromford Meadows, and the prize-giving is at The Fishpond in
          Matlock Bath. Check the
          {" "}
          <a className="text-(--surface-link) hover:underline" href="/info/the-race">route and timings</a>
          {" "}
          to plan where to stand.
        </Para>

        <Subheading>Facilities</Subheading>
        <Para>
          Matlock and Matlock Bath both have public toilets, cafés, pubs and shops, many of which
          open on Boxing Day for the event. There are no facilities directly on the riverbank, so
          plan around the town centres.
        </Para>

        <Subheading>What to bring</Subheading>
        <Para>
          Dress warmly and for the weather — it&apos;s late December by a river! Sturdy footwear is
          wise as the banks can be muddy. Bring cash, too: our volunteer bucket collectors will be
          out along the route, and every coin goes to the RNLI.
        </Para>

        <Subheading>Accessibility</Subheading>
        <Para>
          Much of the route runs along paved riverside paths and town centres, but some viewing spots
          involve grass, slopes or steps. Hall Leys Park and the Matlock Bath promenade tend to be the
          most accessible places to watch.
        </Para>

        <Subheading>Dogs</Subheading>
        <Para>
          Well-behaved dogs on leads are welcome along the route — just be mindful of the crowds and
          the cold water.
        </Para>

        <Subheading>Weather &amp; cancellations</Subheading>
        <Para>
          The event goes ahead in most weather, but in rare cases (such as dangerous river levels) it
          may be cancelled on safety grounds. We&apos;ll always post the latest on our
          {" "}
          <a className="text-(--surface-link) hover:underline" href="/updates">updates page</a>
          {" "}
          and our Facebook page, so check before you set off.
        </Para>
      </div>
    </Section>
    <ClosingCta
      primary={{ label: "Take part", href: "/take-part" }}
      secondary={{ label: "Donate", href: "/donate" }}
      text="Coming along? You can also be part of the event by entering a raft or supporting the RNLI."
      title="See you on Boxing Day"
      waveTopColor="var(--color-river)"
    />
    <Footer waveTopColor="var(--color-pine-dark)" />
  </main>
);

const AtTheEventPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default AtTheEventPage;
