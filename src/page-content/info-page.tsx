import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import Heading from "~/components/heading";
import PageShell from "~/components/page-shell";
import Section from "~/components/section";
import InnerHeroSection from "~/sections/inner-hero-section";

type Props = { cardImages?: string[] };

type InfoCard = {
  title: string;
  description: string;
  href: string;
  bg: string;
  wide?: boolean;
};

const CARDS: InfoCard[] = [
  { title: "The race", description: "Route & timings", href: "/info/the-race", bg: "bg-pine" },
  { title: "Getting here", description: "Travel & parking", href: "/info/getting-here", bg: "bg-sun" },
  { title: "At the event", description: "Where to watch & facilities", href: "/info/at-the-event", bg: "bg-river" },
  { title: "FAQs", description: "Your questions, answered", href: "/info/faqs", bg: "bg-raft" },
  { title: "Our story", description: "The history of the event & the RNLI", href: "/about", bg: "bg-ink", wide: true }
];

const Content = ({ cardImages = [] }: Props) => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Event information" wavesColor="var(--color-cream)" />
    <Section palette="cream">
      <Heading
        palette="cream"
        subtitle="Everything you need to know"
        title="Event Information"
      />
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 px-4 sm:grid-cols-2">
        {
          CARDS.map((card, i) => (
            <a
              key={card.href}
              className={`group relative block overflow-hidden rounded-[2px] border-[6px] border-white shadow-[7px_7px_0_0_rgba(0,0,0,0.25)] transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:-translate-y-1 hover:shadow-[11px_11px_0_0_rgba(0,0,0,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${card.bg} ${card.wide ? "aspect-[16/9] sm:col-span-2 sm:aspect-[16/6]" : "aspect-[4/3]"}`}
              href={card.href}
            >
              {
                cardImages[i] &&
                  <img
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    src={cardImages[i]}
                  />
              }
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.2)_55%,transparent)]" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5 text-white">
                <h3 className="font-display uppercase text-2xl md:text-3xl leading-tight">
                  {card.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 font-label font-bold uppercase tracking-wide text-sm transition-all group-hover:gap-2.5">
                  {card.description}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))
        }
      </div>
    </Section>
    <ClosingCta
      primary={{ label: "Take part", href: "/take-part" }}
      secondary={{ label: "Donate", href: "/donate" }}
      text="Got the info you need? Be part of Matlock's favourite Boxing Day tradition."
      title="Ready to get involved?"
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
