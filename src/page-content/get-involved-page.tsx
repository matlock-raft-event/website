import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import PhotoTile from "~/components/photo-tile";
import Section from "~/components/section";

type Props = { cardImages?: string[] };

type InvolvedCard = {
  title: string;
  href: string;
};

/* The four ways in, in the order they matter to the event: crews first,
   because without rafts there is no race; then the people who run the day, the
   money that goes to the RNLI, and the businesses that pay for it all. */
const CARDS: InvolvedCard[] = [
  { title: "Enter a raft", href: "/take-part" },
  { title: "Volunteer", href: "/volunteer" },
  { title: "Donate", href: "/donate" },
  { title: "Sponsor us", href: "/sponsors" }
];

const Content = ({ cardImages = [] }: Props) => (
  <main id="main" tabIndex={-1}>
    {/* Same tiles as /info: the site has two hubs and they look like siblings. */}
    <PageHeader
      background="stripes"
      color="sun"
      eyebrow="Four ways to be part of it"
      title="Get involved"
    />
    <Section color="sun" plain>
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-4 sm:grid-cols-2">
        {
          CARDS.map((card, i) => (
            <PhotoTile
              key={card.href}
              href={card.href}
              src={cardImages[i]}
              title={card.title}
            />
          ))
        }
      </div>
    </Section>
    <ClosingCta
      primary={{ label: "Enter a raft", href: "/take-part" }}
      secondary={{ label: "Donate to the RNLI", href: "/donate" }}
      text="However you join in, every raft and every pound goes towards the lifeboats."
      title="Not sure where to start?"
      waveTopColor="var(--color-sun)"
    />
    <Footer waveTopColor="var(--color-pine-dark)" />
  </main>
);

const GetInvolvedPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default GetInvolvedPage;
