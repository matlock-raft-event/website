import FacebookIcon from "./facebook-icon";

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
      { label: "Gallery", to: "/gallery" }
    ]
  },
  {
    title: "Get in touch",
    links: [
      { label: "Contact us", to: "/contact" }
    ]
  }
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Cookies Policy", to: "/cookies" }
];

const Footer = () => (
  <footer className="w-full pt-12 pb-8 bg-pine-dark text-cream">
    <div className="mx-auto w-full container px-4 flex flex-col items-center gap-10">
      <div className="grid w-full max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
        {
          columns.map(column => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
              <p className="font-display uppercase text-base text-sun">
                {column.title}
              </p>
              <ul className="flex flex-col gap-2">
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

      <div className="flex flex-col items-center gap-2">
        <p className="font-bold text-xs uppercase tracking-wider">
          Find us elsewhere
        </p>
        <FacebookIcon color="var(--color-cream)" href="https://www.facebook.com/matlockraftevent/" />
      </div>

      <div className="flex flex-col items-center gap-3 border-t border-cream/20 pt-6 w-full max-w-4xl">
        <nav aria-label="Legal" className="flex flex-row flex-wrap justify-center items-center gap-x-6 gap-y-1">
          {
            legalLinks.map(link => (
              <a key={link.to} className="text-sm text-cream/85 hover:text-sun hover:underline" href={link.to}>
                {link.label}
              </a>
            ))
          }
        </nav>
        <p className="text-sm leading-relaxed text-center">
          &#169; Copyright
          {" "}
          {new Date().getFullYear()}
          {" "}
          -
          {" "}
          <strong>Dasac’s Matlock Raft Event</strong>
          {" "}
          - In aid of the Royal National Lifeboat Institution (RNLI)
        </p>
        <p className="text-sm leading-relaxed text-center">
          Website designed and coded with ♥ by
          {" "}
          <strong>Ian Ryde</strong>
          {" "}
          and
          {" "}
          <strong>Sam Hepburn</strong>
          .
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
