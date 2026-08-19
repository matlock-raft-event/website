import { useEffect, useState } from "react";

import FacebookIcon from "~/components/facebook-icon";
import Iconify from "~/components/iconify";
import Logo from "~/components/logo";
import { Button } from "~/components/ui/button";
import Drawer from "~/components/ui/drawer/drawer";
import DrawerContent from "~/components/ui/drawer/drawer-content";
import DrawerTitle from "~/components/ui/drawer/drawer-title";
import Waves from "~/components/waves";
import { ListIcon } from "@phosphor-icons/react";

/* Split nav around the centred hanging badge — the tall logo is the
   crowning centrepiece rather than a corner overflow. Once the page
   scrolls, the badge shrinks to a small lip below the bar so it never
   sits over content. */
const leftLinks = [
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
  }
];

const rightLinks = [
  {
    label: "Gallery",
    to: "/gallery"
  },
  {
    label: "Contact",
    to: "/contact"
  }
];

const allLinks = [...leftLinks, ...rightLinks];

/* Plain anchors, but in the button's exact type voice so the header reads
   as one system: label face, text-sm, extrabold, tracking-wider. */
const NavLink = ({ label, to }: { label: string; to: string }) => (
  <a
    className="font-label text-sm font-extrabold uppercase tracking-wider text-cream transition-colors duration-150 hover:text-sun focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sun"
    href={to}
  >
    {label}
  </a>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-20">
      <div className="bg-pine border-b-[3px] border-pine-dark">
        <div className="mx-auto h-14 container px-4 grid grid-cols-[1fr_auto_1fr] items-center">
          <nav aria-label="Primary left" className="hidden md:flex flex-row items-center justify-between pr-8">
            {leftLinks.map(link => <NavLink key={link.to} {...link} />)}
          </nav>
          <div className="md:hidden" />

          {/* Slot is wider than the badge so the logo keeps clear air on both
              sides; the grid centres the slot, so the gaps stay symmetrical */}
          <div className="relative w-28 md:w-44 self-stretch">
            <a
              className={`absolute left-1/2 -translate-x-1/2 transition-[width,top] duration-300 [filter:drop-shadow(0_5px_0_rgba(8,64,44,0.35))] ${
                scrolled ? "top-[3px] w-[68px]" : "top-1.5 w-24 md:w-32"
              }`}
              href="/"
            >
              <Logo className="w-full" />
            </a>
          </div>

          <div className="flex flex-row items-center justify-between pl-8">
            <nav aria-label="Primary right" className="hidden md:contents">
              {rightLinks.map(link => <NavLink key={link.to} {...link} />)}
              <Button href="/donate" size="sm">
                Donate
              </Button>
            </nav>
            <div className="md:hidden ml-auto">
              <Button
                aria-label="open menu"
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
                allLinks.map(link => (
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
