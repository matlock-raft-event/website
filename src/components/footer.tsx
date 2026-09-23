import { Fragment } from "react";

import FacebookIcon from "./facebook-icon";
import rnliBadge from "~/assets/images/rnlifundraise.png";
import SanityImage from "~/components/sanity-image";
import Waves from "~/components/waves";
import { resolveAssetSrc } from "~/lib/assets";
import { opticalScale } from "~/lib/optical-scale";
import sponsorStrip from "~/lib/sponsor-strip.json";

const rnliSrc = resolveAssetSrc(rnliBadge);

/* Must match the cell classes on each logo link below (w-32 h-16). */
const CELL_W = 128;
const CELL_H = 64;

type FooterProps = {
  /** Colour of the section sitting above the footer's seam wave. */
  waveTopColor?: string;
  /** Off on pages that already show the full logo wall above the footer. */
  sponsorStrip?: boolean;
};

/* Separates the small print's parts on the one line they share. The ones
   between the three groups are hidden below md, where the row stacks and a
   separator would dangle at the end of a line. */
const Dot = ({ className = "" }: { className?: string }) => (
  <span aria-hidden="true" className={`text-cream/35 ${className}`}>
    &#183;
  </span>
);

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Cookies Policy", to: "/cookies" }
];

/* Three things and nothing else: who pays for it, who it raises for, and the
   small print. The site's navigation and its logo live in the header, so the
   footer doesn't repeat either. */
const Footer = ({ waveTopColor = "var(--color-cream)", sponsorStrip: showStrip = true }: FooterProps) => (
  <>
    {
      /* Pages ending in a pine-dark closing flow straight into the footer;
         everyone else gets the seam wave. */
      waveTopColor !== "var(--color-pine-dark)" &&
        <Waves bottomColor="var(--color-pine-dark)" topColor={waveTopColor} variant={3} />
    }
    {/* The frame is pine-dark and isn't a Section, so it names its own focus
        ring; ink would be invisible down here. */}
    <footer className="w-full pt-10 pb-6 bg-pine-dark text-cream [--surface-focus:var(--color-sun)]">
      <div className="mx-auto w-full container px-4 flex flex-col gap-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          {
            showStrip &&
              <div className="flex flex-col items-center gap-3">
                <p className="label-caps text-xs text-sun">
                  Supported by
                </p>
                {/* One white card holding every logo: the light backing the
                    small-business logos need, without per-logo chips.
                    mix-blend-multiply folds their white backgrounds in. */}
                <div className="flex flex-row flex-wrap items-center justify-center gap-x-7 gap-y-4 rounded-[10px] bg-white px-7 py-5">
                  {
                    sponsorStrip.map(sponsor => {
                      const scale = opticalScale(sponsor.logo, CELL_W, CELL_H);
                      /* Identical cells give the wall its rhythm; the optical
                         scale then evens out how much ink each logo actually
                         puts on the card. */
                      const logo = (
                        <SanityImage
                          alt={sponsor.name ?? undefined}
                          className="mix-blend-multiply"
                          image={sponsor.logo}
                          width={320}
                          style={{
                            height: `${scale * 100}%`,
                            width: `${scale * 100}%`,
                            objectFit: "contain"
                          }}
                        />
                      );
                      const cell = "flex h-16 w-32 items-center justify-center";

                      /* A sponsor with no website on file shows as a logo
                         rather than as a link to nowhere — this wall is on
                         every page. */
                      if (!sponsor.url) {
                        return <div key={sponsor.name} className={cell}>{logo}</div>;
                      }

                      return (
                        <a
                          key={sponsor.name}
                          aria-label={sponsor.name ? `${sponsor.name} (opens in a new tab)` : undefined}
                          className={`${cell} transition-transform duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine`}
                          href={sponsor.url}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {logo}
                        </a>
                      );
                    })
                  }
                </div>
              </div>
          }
        </div>

        {/* One line of small print: the notice, the policies and the credit,
            in that order, wrapping to more lines only when they must. */}
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-y-1 border-t border-cream/20 pt-5 text-center text-xs text-cream/75 md:flex-row md:flex-wrap md:justify-center md:gap-x-4">
          <p>
            &#169;
            {" "}
            {new Date().getFullYear()}
            {" "}
            <strong className="text-cream">Dasac&apos;s Matlock Raft Event</strong>
            {" "}
            &mdash; In aid of the RNLI
          </p>
          <Dot className="hidden md:inline" />
          <nav aria-label="Legal" className="flex flex-row items-center gap-x-4">
            {
              legalLinks.map((link, i) => (
                <Fragment key={link.to}>
                  {i > 0 && <Dot />}
                  <a className="text-cream/85 hover:text-sun hover:underline" href={link.to}>
                    {link.label}
                  </a>
                </Fragment>
              ))
            }
          </nav>
          <Dot className="hidden md:inline" />
          <p className="text-cream/60">
            Designed and coded with &#9829; by
            {" "}
            <strong className="text-cream/80">Ian Ryde</strong>
            {" "}
            and
            {" "}
            <strong className="text-cream/80">Sam Hepburn</strong>
          </p>
        </div>

        {/* Who it raises for, and the one place to follow it — the last thing
            on the page, under the small print. */}
        <div className="flex flex-row items-center justify-center gap-7">
          <img alt="RNLI fundraising badge" className="w-24 shrink-0" loading="lazy" src={rnliSrc} />
          <FacebookIcon color="var(--color-cream)" height={44} href="https://www.facebook.com/matlockraftevent/" width={44} />
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
