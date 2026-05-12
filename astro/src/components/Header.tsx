import * as React from "react";
import { useState } from "react";
import { Box, Container, Drawer, Fab, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import FacebookIcon from "~/components/FacebookIcon";
import Iconify from "~/components/Iconify";
import Logo from "~/components/Logo";
import { Button } from "~/components/ui/button";
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
  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

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
                <Box component="a" href="/">
                  <Logo
                    sx={{
                      position: "absolute",
                      top: theme.spacing(1),
                      left: theme.spacing(1),
                      zIndex: 21,
                      maxWidth: 200,
                      width: "20%",
                      marginTop: theme.spacing(0.5)
                    }}
                  />
                </Box>

                <Box>
                  {/* @ts-ignore */}
                  <Fab aria-label="add" color="green" onClick={toggleDrawer}>
                    <Iconify icon="ph:list" />
                  </Fab>
                </Box>
              </div>
              <Drawer
                anchor="top"
                onClose={toggleDrawer}
                open={open}
                sx={{
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    backgroundColor: theme.palette.green.main,
                    height: "100vh",
                    width: "100vw"
                  }
                }}
              >
                <Fab
                  aria-label="close menu"
                  color="secondary"
                  onClick={toggleDrawer}
                  size="large"
                  sx={{
                    position: "absolute",
                    top: theme.spacing(2),
                    right: theme.spacing(2)
                  }}
                >
                  <Iconify icon="ph:x-bold" />
                </Fab>

                <div className="flex flex-col justify-between min-h-screen">

                  <div className="flex flex-col gap-4 py-8 px-6">
                    {
                      links.map(link => (
                        <Button
                          key={link.label}
                          className="text-secondary text-4xl justify-start px-0 h-auto py-1 no-underline hover:no-underline"
                          href={link.to}
                          variant="link"
                        >
                          {link.label}
                        </Button>
                      ))
                    }
                    <div>
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
                <Container>
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
                    <Box
                      component="a"
                      flex={1}
                      href="/"
                      sx={{
                        position: "relative",
                        zIndex: 16
                      }}
                    >
                      <Logo
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: "50%",
                          transform: "translate(50%, -0%)",
                          zIndex: 21,
                          maxWidth: 260,
                          width: "100%",
                          marginTop: theme.spacing(0.5)
                        }}
                      />
                    </Box>
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
                </Container>

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
