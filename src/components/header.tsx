import { useEffect, useState } from "react";

import FacebookIcon from "~/components/facebook-icon";
import Iconify from "~/components/iconify";
import Lettering from "~/components/lettering";
import { Button } from "~/components/ui/button";
import Drawer from "~/components/ui/drawer/drawer";
import DrawerContent from "~/components/ui/drawer/drawer-content";
import DrawerTitle from "~/components/ui/drawer/drawer-title";
import Waves from "~/components/waves";
import { ListIcon } from "@phosphor-icons/react";

/* The festival header. The badge never goes in the bar — it's portrait and
   illegible at 56px — so the bar carries the badge's own lettering instead,
   and the full badge lives in the home hero and the footer.

   On the home page the bar starts transparent over the hero photo and goes
   solid once the page scrolls. */
const links = [
  {
    label: "Take Part",
    to: "/take-part"
  },
  {
    label: "Info",
    to: "/info"
  },
  {
    label: "Sponsors",
    to: "/sponsors"
  },
  {
    label: "Gallery",
    to: "/gallery"
  },
  {
    label: "Contact",
    to: "/contact"
  }
];

/* Nav links in the display face, poster-style, with a sun underline that
   draws in on hover. */
const NavLink = ({ label, to }: { label: string; to: string }) => (
  <a
    className="relative font-display text-[1.1875rem] uppercase tracking-[0.04em] text-cream [text-shadow:0_2px_0_rgba(5,43,30,0.45)] transition-colors duration-150 hover:text-sun after:absolute after:left-0 after:right-full after:-bottom-1 after:h-[3px] after:rounded-full after:bg-sun after:transition-[right] after:duration-200 after:content-[''] hover:after:right-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sun"
    href={to}
  >
    {label}
  </a>
);

type HeaderProps = {
  /** Home page: the bar sits transparent over the hero until the page scrolls. */
  overlay?: boolean;
};

const Header = ({ overlay = false }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return undefined;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const solid = !overlay || scrolled;

  return (
    <header className={`sticky top-0 z-20 ${overlay ? "-mb-[59px]" : ""}`}>
      <div
        className={`border-b-[3px] transition-colors duration-200 ${
          solid ? "bg-pine border-pine-dark" : "bg-transparent border-transparent"
        }`}
      >
        <div className="mx-auto h-14 container px-4 grid grid-cols-[auto_1fr_auto] items-center gap-6">
          <a
            aria-label="The Matlock Raft Event, home"
            className="flex h-14 items-center text-cream [filter:drop-shadow(0_2px_0_rgba(5,43,30,0.45))] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-sun"
            href="/"
          >
            <Lettering className="h-11 w-auto" />
          </a>

          <nav aria-label="Primary" className="hidden md:flex flex-row items-center justify-center gap-7">
            {links.map(link => <NavLink key={link.to} {...link} />)}
          </nav>
          <div className="md:hidden" />

          <div className="flex flex-row items-center gap-2.5">
            <Button href="/donate" size="sm">
              Donate
            </Button>
            <Button
              aria-label="open menu"
              className="md:hidden"
              color="cream"
              onClick={() => setOpen(true)}
              size="icon-sm"
              variant="solid"
            >
              <ListIcon weight="bold" />
            </Button>
          </div>
        </div>
      </div>

    <Drawer direction="top" onOpenChange={setOpen} open={open}>
      <DrawerContent
        className="bg-pine border-0 data-[vaul-drawer-direction=top]:h-screen data-[vaul-drawer-direction=top]:max-h-screen data-[vaul-drawer-direction=top]:mb-0 data-[vaul-drawer-direction=top]:rounded-none">
        <DrawerTitle className="sr-only">Mobile navigation</DrawerTitle>

        <Button
          aria-label="close menu"
          className="absolute top-4 right-4"
          color="pine"
          onClick={() => setOpen(false)}
          size="icon-lg"
          variant="solid"
        >
          <Iconify icon="ph:x-bold" />
        </Button>

        <div className="flex flex-col justify-between min-h-screen">

          <nav aria-label="Primary" className="flex flex-col gap-6 py-8 px-6">
            {
              links.map(link => (
                <Button
                  key={link.label}
                  className="text-secondary text-4xl justify-start px-0 h-auto py-3 no-underline hover:no-underline"
                  href={link.to}
                  variant="link"
                >
                  {link.label}
                </Button>
              ))
            }
            <div className="pt-2">
              <Button
                href="/donate"
                size="lg"
              >
                Donate
              </Button>
            </div>
          </nav>

          <div>
            <Waves
              bottomColor="var(--color-pine-dark)"
              style={{ marginBottom: -1 }}
              topColor="var(--color-pine)"
            />
            <div className="flex flex-col p-6 bg-pine-dark">
              <h5 className="text-secondary font-bold text-lg md:text-xl">
                Find us on Facebook:
              </h5>
              <FacebookIcon
                color="var(--color-cream)"
                href="https://www.facebook.com/matlockraftevent/"
              />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
    </header>
  );
};

export default Header;
