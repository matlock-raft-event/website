import FacebookIcon from "./facebook-icon";
import Logo from "./logo";
import rnliBadge from "~/assets/images/rnlifundraise.png";
import SanityImage from "~/components/sanity-image";
import Waves from "~/components/waves";
import { resolveAssetSrc } from "~/lib/assets";
import sponsorStrip from "~/lib/sponsor-strip.json";

const rnliSrc = resolveAssetSrc(rnliBadge);

type FooterProps = {
  /** Colour of the section sitting above the footer's seam wave. */
  waveTopColor?: string;
  /** Off on pages that already show the full logo wall above the footer. */
  sponsorStrip?: boolean;
};

const columns = [
  {
    title: "Take part",
    links: [
      { label: "Enter a raft", to: "/take-part" },
      { label: "Volunteer", to: "/volunteer" },
      { label: "Donate", to: "/donate" },
      { label: "Become a sponsor", to: "/sponsors" }
    ]
  },
  {
    title: "Plan your day",
    links: [
      { label: "Event info", to: "/info" },
      { label: "FAQs", to: "/info/faqs" },
      { label: "Hall of fame", to: "/hall-of-fame" },
      { label: "Vote for your boat", to: "/vote" }
    ]
  },
  {
    title: "Discover",
    links: [
      { label: "About", to: "/about" },
      { label: "Latest updates", to: "/updates" },
      { label: "Gallery", to: "/gallery" },
      { label: "Contact us", to: "/contact" }
    ]
  }
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Cookies Policy", to: "/cookies" }
];

const Footer = ({ waveTopColor = "var(--color-cream)", sponsorStrip: showStrip = true }: FooterProps) => (
  <>
    {
      /* Pages ending in a pine-dark closing flow straight into the footer;
         everyone else gets the seam wave. */
      waveTopColor !== "var(--color-pine-dark)" &&
        <Waves bottomColor="var(--color-pine-dark)" topColor={waveTopColor} variant={3} />
    }
    <footer className="w-full pt-12 pb-8 bg-pine-dark text-cream">
    <div className="mx-auto w-full container px-4 flex flex-col gap-10">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1 flex flex-col items-start gap-4">
          <a aria-label="The Matlock Raft Event — home" href="/">
            <Logo className="w-28" />
          </a>
          <p className="text-sm leading-relaxed text-cream/75 max-w-[30ch]">
            Dasac&apos;s Matlock Raft Event &mdash; in aid of the Royal National
            Lifeboat Institution.
          </p>
          <img alt="RNLI fundraising badge" className="w-24" loading="lazy" src={rnliSrc} />
          <FacebookIcon color="var(--color-cream)" href="https://www.facebook.com/matlockraftevent/" />
        </div>
        {
          columns.map(column => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
              <p className="label-caps text-xs text-sun">
                {column.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {
                  column.links.map(link => (
                    <li key={link.to}>
                      <a
                        className="text-sm text-cream/85 hover:text-sun hover:underline"
                        href={link.to}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </nav>
          ))
        }
      </div>

      {
        showStrip &&
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 border-t border-cream/20 pt-6">
            <p className="label-caps text-xs text-sun">
              Supported by
            </p>
            {/* Paper chips keep small-business logos legible on the dark
                footer; mix-blend-multiply folds their white backgrounds
                into the chip. */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-2">
              {
                sponsorStrip.map(sponsor => (
                  <a
                    key={sponsor.name}
                    aria-label={sponsor.name ?? undefined}
                    className="flex h-14 items-center justify-center rounded-[4px] bg-paper px-4 py-2 transition-transform duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun"
                    href={sponsor.slug ? `/sponsors/${sponsor.slug}` : undefined}
                  >
                    {/* Explicit height, width from aspect ratio: dimensionless
                        SVG logos (viewBox only) collapse to zero width under
                        max-* constraints in a shrink-to-fit chip. */}
                    <SanityImage
                      alt={sponsor.name ?? undefined}
                      className="mix-blend-multiply"
                      image={sponsor.logo}
                      width={320}
                      style={{
                        height: "100%",
                        width: "auto",
                        maxWidth: "12rem",
                        objectFit: "contain"
                      }}
                    />
                  </a>
                ))
              }
            </div>
          </div>
      }

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 border-t border-cream/20 pt-6">
        <div className="flex flex-row flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p className="text-sm text-cream/75">
            &#169; Copyright
            {" "}
            {new Date().getFullYear()}
            {" "}
            &mdash;
            {" "}
            <strong className="text-cream">Dasac&apos;s Matlock Raft Event</strong>
            {" "}
            &mdash; In aid of the RNLI
          </p>
          <nav aria-label="Legal" className="flex flex-row flex-wrap items-center gap-x-6 gap-y-1">
            {
              legalLinks.map(link => (
                <a key={link.to} className="text-sm text-cream/85 hover:text-sun hover:underline" href={link.to}>
                  {link.label}
                </a>
              ))
            }
          </nav>
        </div>
        <p className="text-sm leading-relaxed text-cream/75">
          Website designed and coded with &#9829; by
          {" "}
          <strong className="text-cream">Ian Ryde</strong>
          {" "}
          and
          {" "}
          <strong className="text-cream">Sam Hepburn</strong>
          .
        </p>
      </div>
    </div>
    </footer>
  </>
);

export default Footer;
