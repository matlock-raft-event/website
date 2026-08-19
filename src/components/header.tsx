import { useState } from "react";

import FacebookIcon from "~/components/facebook-icon";
import Iconify from "~/components/iconify";
import Logo from "~/components/logo";
import { Button } from "~/components/ui/button";
import Drawer from "~/components/ui/drawer/drawer";
import DrawerContent from "~/components/ui/drawer/drawer-content";
import DrawerTitle from "~/components/ui/drawer/drawer-title";
import Waves from "~/components/waves";
import { ListIcon } from "@phosphor-icons/react";

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

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="bg-pine">
        <div className="mx-auto h-16 container px-4 flex flex-row items-center justify-between w-full">
          <a className="shrink-0 self-start" href="/">
            <Logo className="w-32 mt-1" />
          </a>

          <nav aria-label="Primary" className="hidden sm:flex flex-row items-center gap-4">
            {
              links.map(link => (
                <Button
                  color="cream"
                  key={link.label}
                  href={link.to}
                  variant="link"
                >
                  {link.label}
                </Button>
              ))
            }
            <Button href="/donate">
              Donate
            </Button>
          </nav>
          <div className="sm:hidden flex flex-row items-center">
            <Button
              aria-label="open menu"
              color="cream"
              onClick={() => setOpen(true)}
              size="icon-lg"
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
