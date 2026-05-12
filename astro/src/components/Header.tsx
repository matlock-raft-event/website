import { useState } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import FacebookIcon from "~/components/FacebookIcon";
import Iconify from "~/components/Iconify";
import Logo from "~/components/Logo";
import { Button } from "~/components/ui/button";
import Drawer from "~/components/ui/drawer/drawer";
import DrawerContent from "~/components/ui/drawer/drawer-content";
import DrawerTitle from "~/components/ui/drawer/drawer-title";
import Waves from "~/components/Waves";
import useResponsive from "~/hooks/useResponsive";
import { GREEN } from "~/theme/palette";

const links = [
  { label: "About", to: "/about" },
  { label: "Info", to: "/info" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Contact", to: "/contact" },
  { label: "Gallery", to: "/gallery" }
];

const NavLink = ({
  label,
  to
}: { label: string, to: string }) => (
  <Button
    color="cream"
    href={to}
    variant="link"
  >
    {label}
  </Button>
);
const Header = () => {
  const theme = useTheme();

  const isMobile = useResponsive("down", "md");

  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 20
      }}
    >
      {
        isMobile
          ? (
            <>
              <div className="flex flex-row justify-between p-4">
                <a href="/">
                  <Logo className="absolute top-2 left-2 z-[21] max-w-[200px] w-1/5 mt-1" />
                </a>

                <div>
                  <Button
                    aria-label="open menu"
                    color="green"
                    onClick={() => setOpen(true)}
                    size="icon-lg"
                    variant="solid"
                  >
                    <Iconify icon="ph:list" />
                  </Button>
                </div>
              </div>
              <Drawer direction="top" onOpenChange={setOpen} open={open}>
                <DrawerContent className="bg-green border-0 data-[vaul-drawer-direction=top]:h-screen data-[vaul-drawer-direction=top]:max-h-screen data-[vaul-drawer-direction=top]:mb-0 data-[vaul-drawer-direction=top]:rounded-none">
                  <DrawerTitle className="sr-only">Mobile navigation</DrawerTitle>

                  <Button
                    aria-label="close menu"
                    className="absolute top-4 right-4"
                    color="green"
                    onClick={() => setOpen(false)}
                    size="icon-lg"
                    variant="solid"
                  >
                    <Iconify icon="ph:x-bold" />
                  </Button>

                  <div className="flex flex-col justify-between min-h-screen">

                    <div className="flex flex-col gap-6 py-8 px-6">
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
                    </div>

                    <div>
                      <Waves
                        bottomColor={theme.palette.green.dark}
                        style={{ marginBottom: -1 }}
                        topColor={theme.palette.green.main}
                      />
                      <div className="flex flex-col p-6 bg-green-dark">
                        <Typography color="secondary" variant="h5">
                                                  Find us on Facebook:
                        </Typography>
                        <FacebookIcon
                          color={theme.palette.secondary.main}
                          href="https://www.facebook.com/matlockraftevent/"
                        />
                      </div>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </>
          )
          : (
            <>
              <div
                style={{
                  backgroundColor: GREEN.main,
                  height: 60
                }}
              >
                <div className="mx-auto w-full max-w-6xl px-4">
                  <div className="flex flex-row">
                    <div className="flex flex-row items-center flex-[3] justify-around p-4 gap-4 w-full">
                      {
                        links.slice(0, 3)
                          .map(link => (
                            <NavLink
                              key={link.label}
                              label={link.label}
                              to={link.to}
                            />
                          ))
                      }
                    </div>
                    <a
                      className="flex-1 relative z-[16]"
                      href="/"
                    >
                      <Logo className="absolute top-0 right-1/2 translate-x-1/2 z-[21] max-w-[260px] w-full mt-1" />
                    </a>
                    <div className="flex flex-row items-center flex-[3] justify-around p-4 gap-4 w-full">
                      {
                        links.slice(3, 5)
                          .map(link => (
                            <NavLink
                              key={link.label}
                              label={link.label}
                              to={link.to}
                            />
                          ))
                      }
                      <Button href="/donate">
                                                Donate
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
              <Waves
                bottomColor={GREEN.main}
                style={{
                  height: 20,
                  transform: "rotate(180deg)",
                  zIndex: 15,
                  marginTop: -1
                }}
                topColor="unset"
                variant={3}
              />
            </>
          )
      }
    </div>
  );
};

export default Header;
