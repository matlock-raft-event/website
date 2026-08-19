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
      showStrip
        ? (
          <>
            <Waves bottomColor="#fff" topColor={waveTopColor} variant={2} />
            {/* White (not cream) so mix-blend-multiply erases the white
                backgrounds baked into most sponsor logos completely. */}
            <div className="bg-white">
              <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-5 px-4 py-8">
                <p className="label-caps text-xs text-ink/60">
                  Supported by
                </p>
                <div className="flex flex-row flex-wrap items-center justify-center">
                  {
                    sponsorStrip.map(sponsor => (
                      <a
                        key={sponsor.name}
                        aria-label={sponsor.name ?? undefined}
                        className="flex h-10 items-center justify-center transition-transform duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine sm:h-12"
                        href={sponsor.slug ? `/sponsors/${sponsor.slug}` : undefined}
                      >
                        <SanityImage
                          alt={sponsor.name ?? undefined}
                          className="mix-blend-multiply"
                          image={sponsor.logo}
                          width={240}
                          style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain"
                          }}
                        />
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
            <Waves bottomColor="var(--color-pine-dark)" topColor="#fff" variant={3} />
          </>
        )
        : <Waves bottomColor="var(--color-pine-dark)" topColor={waveTopColor} variant={3} />
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
