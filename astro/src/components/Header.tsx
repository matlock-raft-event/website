import * as React from "react";
import { useState } from "react";
import { Box, Container, Drawer, Fab, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import FacebookIcon from "~/components/FacebookIcon";
import Iconify from "~/components/Iconify";
import Logo from "~/components/Logo";
import { Button } from "~/components/ui/button";
import Waves from "~/components/Waves";
import useResponsive from "~/hooks/useResponsive";
import { GREEN } from "~/theme/palette";
import { TITLE_FONT_FAMILY } from "~/theme/typography";

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
}: { label: string, to: string }) => {
  const theme = useTheme();
  return (
    <Typography
      key={label}
      color="secondary"
      component="a"
      href={to}
      sx={{
        transition:
                    "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
        fontFamily: TITLE_FONT_FAMILY,
        fontWeight: 600,
        textTransform: "uppercase",
        textShadow: `0px 2px ${theme.palette.dark.light}`,
        textDecorationColor: "transparent",
        "&:hover": {
          transform: "scale(1.05)",
          textDecorationColor: theme.palette.secondary.main,
          textShadow: "none"
        }
      }}
      variant="h6"
    >
      {label}
    </Typography>
  );
};
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
              <Stack direction="row" justifyContent="space-between" p={2}>
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
              </Stack>
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

                <Stack justifyContent="space-between" sx={{ minHeight: "100vh" }}>

                  <Stack
                    spacing={2}
                    sx={{
                      paddingY: 4,
                      paddingX: 3
                    }}
                  >
                    {
                      links.map(link => (
                        <Typography
                          key={link.label}
                          color="secondary"
                          component="a"
                          href={link.to}
                          sx={{
                            fontFamily: TITLE_FONT_FAMILY,
                            textDecoration: "none",
                            textTransform: "uppercase"
                          }}
                          variant="h2"
                        >
                          {link.label}
                        </Typography>
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
                  </Stack>

                  <div>
                    <Waves
                      bottomColor={theme.palette.green.dark}
                      style={{ marginBottom: -1 }}
                      topColor={theme.palette.green.main}
                    />
                    <Stack padding={3} sx={{ backgroundColor: theme.palette.green.dark }}>
                      <Typography color="secondary" variant="h5">
                                                Find us on Facebook:
                      </Typography>
                      <FacebookIcon
                        color={theme.palette.secondary.main}
                        href="https://www.facebook.com/matlockraftevent/"
                      />
                    </Stack>
                  </div>
                </Stack>

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
                  <Stack direction="row">
                    <Stack
                      alignItems="center"
                      direction="row"
                      flex={3}
                      justifyContent="space-around"
                      padding={2}
                      spacing={2}
                      width={1}
                    >
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
                    </Stack>
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
                    <Stack
                      alignItems="center"
                      direction="row"
                      flex={3}
                      justifyContent="space-around"
                      padding={2}
                      spacing={2}
                      width={1}
                    >
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
                    </Stack>
                  </Stack>
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
