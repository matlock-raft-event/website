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

/* Bunting strung across the top of the footer frame.
   Built as a seamlessly repeating 260x44 tile (the rope is one full sine-like
   period, so tiles join without a seam) rendered at fixed size via
   background-repeat — flags never stretch or squash, at any viewport width.
   Data-URI backgrounds can't read CSS variables, so the fills mirror the
   palette tokens: rope cream #f6f3e2, flags raft #d23a34 / sun #fbba47 /
   river #1d6a72. */
const buntingTile = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="44" viewBox="0 0 260 44">`
  + `<path d="M0 12 Q 65 30 130 12 T 260 12" fill="none" stroke="#f6f3e2" stroke-width="2.5" opacity=".55"/>`
  // flags hang from points on the rope curve (y = 12 + 36t(1-t) at t = .25/.75)
  + `<path d="M23.5 17.9 L42.5 19.9 L36.5 36.8 Z" fill="#d23a34"/>`
  + `<path d="M88.5 19.9 L107.5 17.9 L101.5 36.8 Z" fill="#fbba47"/>`
  + `<path d="M153.5 17.9 L172.5 19.9 L166.5 36.8 Z" fill="#1d6a72"/>`
  + `<path d="M218.5 19.9 L237.5 17.9 L231.5 36.8 Z" fill="#fbba47"/>`
  + `</svg>`
);

const Bunting = () => (
  <div
    aria-hidden="true"
    className="h-11 w-full"
    style={{
      backgroundImage: `url("data:image/svg+xml,${buntingTile}")`,
      backgroundRepeat: "repeat-x",
      backgroundSize: "260px 44px"
    }}
  />
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
