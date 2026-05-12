import { useEffect } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import HeaderImg from "~/assets/images/header.jpg";
import RnliFundraiseImg from "~/assets/images/rnlifundraise.png";
import Header from "~/components/Header";
import HeroCountdown from "~/components/HeroCountdown";
import Iconify from "~/components/Iconify";
import { Button } from "~/components/ui/button";
import Waves from "~/components/Waves";
import useResponsive from "~/hooks/useResponsive";
import useSanityFetch from "~/hooks/useSanityFetch";
import { PRIMARY_FONT_FAMILY, TITLE_FONT_FAMILY } from "~/theme/typography";

const resolveSrc = (asset: unknown): string => (asset as { src?: string }).src ?? (asset as unknown as string);

const StyledImg = styled("img")(() => ({
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "cover",
  objectPosition: "center"
}));

const StyledOverlay = styled("div")(() => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "black",
  opacity: 0.3,
  zIndex: 10
}));

const StyledGradient = styled("div")(() => ({
  width: "100%",
  height: "calc(100% + 2px)",
  position: "absolute",
  top: 0,
  left: 0,
  backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2), rgba(53,58,60,1))",
  zIndex: 10
}));

const StyledWaves = styled(Waves)(() => ({
  position: "absolute",
  width: "100%",
  left: 0,
  bottom: 0,
  zIndex: 11,
  marginBottom: -1
}));

type HeroContentProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
};
const HeroContent = (
  {
    title,
    subtitle,
    buttonText,
    buttonLink
  }: HeroContentProps) => {
  const theme = useTheme();

  const isMobile = useResponsive("down", "md");
  const isTablet = useResponsive("between", "md", "xl");
  useEffect(() => console.log(isTablet), [isTablet]);
  // eslint-disable-next-line react/no-unstable-nested-components
  const Content = () => (
    <Stack
      justifyContent="center"
      px={1}
      py={2}
      spacing={2}
      style={{
        height: "100%",
        zIndex: 12,
        ...(!isMobile && { width: "61.8vw" })
      }}
    >
      <Typography
        color="yellow.main"
        fontFamily={PRIMARY_FONT_FAMILY}
        sx={{ pt: isTablet ? 12 : 0 }}
        textAlign={isMobile ? "center" : undefined}
        variant="h5"
      >
        {subtitle?.replace("&nbsp;", " ") ?? "MATLOCK'S VERY OWN ANNUAL CHARITY RAFT EVENT"}
      </Typography>
      <Typography
        color="secondary.main"
        fontFamily={TITLE_FONT_FAMILY}
        textAlign={isMobile ? "center" : undefined}
        variant="h1"
      >
        {title?.replace("&nbsp;", " ") ?? "Boxing Day fun for all the family!"}
      </Typography>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent={isMobile ? "center" : undefined}
        spacing={0.5}
      >
        <Iconify color={theme.palette.yellow.main} icon="ph:map-pin-bold" />
        <Typography
          color="secondary.main"
          fontFamily={PRIMARY_FONT_FAMILY}
          variant="subtitle2"
        >
                    Matlock, Derbyshire - 26th December
          {" "}
          {new Date().getFullYear()}
        </Typography>
      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent={isMobile ? "center" : undefined}
        spacing={2}
      >
        <div>
          <Button href={buttonLink ?? "https://www.google.com"} size="lg">
            {buttonText ?? "Get Involved"}
          </Button>
        </div>
        <img
          alt="Fundraising for the RNLI"
          src={resolveSrc(RnliFundraiseImg)}
          style={{
            width: 110,
            objectFit: "contain"
          }}
        />
      </Stack>

      <HeroCountdown />

    </Stack>
  );

  if (isMobile) {
    return (
      <div
        style={{
          backgroundColor: theme.palette.dark.main,
          marginTop: -1
        }}
      >
        <Content />
      </div>
    );
  }
  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 19
      }}
    >
      <Container
        maxWidth="lg"
        style={{ height: "100%" }}
      >
        <Content />
      </Container>
    </div>
  );
};

type HeroData = {
  title?: string;
  subtitle?: string;
  buttonLink?: string;
  buttonText?: string;
};

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useResponsive("down", "lg");

  const { data } = useSanityFetch<HeroData>(
    "*[_type == \"hero\"][0]{ title, subtitle, buttonLink, buttonText }"
  );

  const title = data?.title;
  const subtitle = data?.subtitle;
  const buttonLink = data?.buttonLink;
  const buttonText = data?.buttonText;

  return (
    <div style={{ position: "relative" }}>
      <Header />

      <div style={{ position: "relative" }}>
        <StyledImg src={resolveSrc(HeaderImg)} />
        {
          isMobile
            ? <StyledGradient />
            : <StyledOverlay />
        }
        {
          !isMobile &&
                    <StyledWaves topColor="unset" variant={3} />
        }
      </div>
      <HeroContent
        buttonLink={buttonLink}
        buttonText={buttonText}
        subtitle={subtitle}
        title={title}
      />
      {
        isMobile &&
                <Waves topColor={theme.palette.dark.main} variant={3} />
      }
    </div>
  );
};

export default HeroSection;
