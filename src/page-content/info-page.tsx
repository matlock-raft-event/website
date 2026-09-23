import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import PhotoTile from "~/components/photo-tile";
import Section from "~/components/section";

type Props = { cardImages?: string[] };

type InfoCard = {
  title: string;
  href: string;
  /* Runs the full width under the grid. */
  wide?: boolean;
};

/* Six pages fill two rows of three. Latest updates closes the page as a band
   rather than a seventh tile stranded on its own row — and it is a feed, not a
   page about the event, so a different shape is honest about that. Hall of
   fame is here because it and "Our story" are both the event's history. */
const CARDS: InfoCard[] = [
  { title: "The race", href: "/info/the-race" },
  { title: "Getting here", href: "/info/getting-here" },
  { title: "At the event", href: "/info/at-the-event" },
  { title: "FAQs", href: "/info/faqs" },
  { title: "Our story", href: "/info/history" },
  { title: "Hall of fame", href: "/hall-of-fame" },
  { title: "Latest updates", href: "/updates", wide: true }
];

const Content = ({ cardImages = [] }: Props) => (
  <main id="main" tabIndex={-1}>
    {/* Photo cards, so the page stays one colour under them (decision 014). */}
    <PageHeader eyebrow="Everything you need to know" title="Event information" />
    <Section color="river" plain>
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3">
        {
          CARDS.map((card, i) => (
            <PhotoTile
              key={card.href}
              aspect={card.wide ? "16 / 5" : "4 / 3"}
              className={card.wide ? "sm:col-span-2 md:col-span-3" : ""}
              href={card.href}
              src={cardImages[i]}
              title={card.title}
              width={card.wide ? 1600 : 900}
            />
          ))
        }
      </div>
    </Section>
    <ClosingCta
      primary={{ label: "Take part", href: "/take-part" }}
      secondary={{ label: "Donate", href: "/donate" }}
      text="Got the info you need? Be part of Matlock's favourite Boxing Day tradition."
      title="Ready to get involved?"
      waveTopColor="var(--color-river)"
    />
    <Footer waveTopColor="var(--color-pine-dark)" />
  </main>
);

const InfoPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default InfoPage;
