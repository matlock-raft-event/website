import FacebookIcon from "./facebook-icon";
import Logo from "./logo";
import rnliBadge from "~/assets/images/rnlifundraise.png";

const rnliSrc = (rnliBadge as { src?: string }).src ?? (rnliBadge as unknown as string);

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

/* Bunting strung across the top of the footer frame: one long gentle S-curve
   (M0 8 Q 360 30 720 14 T 1440 12) with nine varied flags. Flag tops are
   computed on the curve itself — first arc y = 8 + 44t - 38t², reflected arc
   y = 14 - 32t + 30t² — so every pennant hangs from the rope, with
   alternating tilts for a hand-strung feel. Scales proportionally. */
const Bunting = () => (
  <svg aria-hidden="true" className="block w-full h-auto" viewBox="0 0 1440 46">
    <path d="M0 8 Q 360 30 720 14 T 1440 12" fill="none" opacity=".55" stroke="var(--color-cream)" strokeWidth="3" />
    <g>
      <path d="M70 11.2 L90 13.6 L83 31.4 Z" fill="var(--color-raft)" />
      <path d="M220 19.4 L240 17 L233 37.2 Z" fill="var(--color-sun)" />
      <path d="M370 19.4 L390 21.8 L383 39.6 Z" fill="var(--color-river)" />
      <path d="M520 21 L540 18.6 L533 38.8 Z" fill="var(--color-raft)" />
      <path d="M670 14.5 L690 16.9 L683 34.7 Z" fill="var(--color-sun)" />
      <path d="M820 11 L840 8.6 L833 28.8 Z" fill="var(--color-river-light)" />
      <path d="M970 5.2 L990 7.6 L983 25.4 Z" fill="var(--color-raft)" />
      <path d="M1120 6.7 L1140 4.3 L1133 24.5 Z" fill="var(--color-sun)" />
      <path d="M1270 6.1 L1290 8.5 L1283 26.3 Z" fill="var(--color-river)" />
    </g>
  </svg>
);

const Footer = () => (
  <footer className="w-full pb-8 bg-pine-dark text-cream">
    <Bunting />
    <div className="mx-auto w-full container px-4 flex flex-col gap-10 pt-8">
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
              <p className="font-label text-xs font-extrabold uppercase tracking-[0.14em] text-sun">
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
);

export default Footer;
