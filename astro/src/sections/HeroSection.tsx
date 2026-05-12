import { useEffect } from "react";
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
    <div
      className="flex flex-col justify-center px-2 py-4 gap-4"
      style={{
        height: "100%",
        zIndex: 12,
        ...(!isMobile && { width: "61.8vw" })
      }}
    >
      <h5
        className={`font-bold text-lg md:text-xl text-yellow font-avenir ${isTablet ? "pt-24" : "pt-0"} ${isMobile ? "text-center" : ""}`}
      >
        {subtitle?.replace("&nbsp;", " ") ?? "MATLOCK'S VERY OWN ANNUAL CHARITY RAFT EVENT"}
      </h5>
      <h1
        className={`font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-secondary font-display ${isMobile ? "text-center" : ""}`}
      >
        {title?.replace("&nbsp;", " ") ?? "Boxing Day fun for all the family!"}
      </h1>
      <div
        className={`flex flex-row items-center gap-1 ${isMobile ? "justify-center" : ""}`}
      >
        <Iconify color={theme.palette.yellow.main} icon="ph:map-pin-bold" />
        <p className="font-semibold text-sm text-secondary font-avenir">
                    Matlock, Derbyshire - 26th December
          {" "}
          {new Date().getFullYear()}
        </p>
      </div>
      <div
        className={`flex flex-row items-center gap-4 ${isMobile ? "justify-center" : ""}`}
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
      </div>

      <HeroCountdown />

    </div>
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
      <div
        className="mx-auto w-full max-w-6xl px-4"
        style={{ height: "100%" }}
      >
        <Content />
      </div>
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
