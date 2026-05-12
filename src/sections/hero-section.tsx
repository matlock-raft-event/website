import HeaderImg from "~/assets/images/header.jpg";
import RnliFundraiseImg from "~/assets/images/rnlifundraise.png";
import Header from "~/components/header";
import HeroCountdown from "~/components/hero-countdown";
import Iconify from "~/components/iconify";
import { Button } from "~/components/ui/button";
import Waves from "~/components/waves";
import useResponsive from "~/hooks/use-responsive";
import type { HeroQueryResult } from "~/lib/sanity.types";

const resolveSrc = (asset: unknown): string => (asset as { src?: string }).src ?? (asset as unknown as string);

type HeroContentProps = {
  title?: string | null;
  subtitle?: string | null;
  buttonText?: string | null;
  buttonLink?: string | null;
};
const HeroContent = (
  {
    title,
    subtitle,
    buttonText,
    buttonLink
  }: HeroContentProps) => {
  const isMobile = useResponsive("down", "md");
  const isTablet = useResponsive("between", "md", "xl");
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
        <Iconify color="var(--color-yellow)" icon="ph:map-pin-bold" />
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
          backgroundColor: "var(--color-dark)",
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

type Props = { hero: HeroQueryResult };

const HeroSection = ({ hero }: Props) => {
  const isMobile = useResponsive("down", "lg");

  const title = hero?.title;
  const subtitle = hero?.subtitle;
  const buttonLink = hero?.buttonLink;
  const buttonText = hero?.buttonText;

  return (
    <div style={{ position: "relative" }}>
      <Header />

      <div style={{ position: "relative" }}>
        <img className="w-full h-auto block object-cover object-center" src={resolveSrc(HeaderImg)} />
        {
          isMobile
            ? <div className="w-full h-[calc(100%+2px)] absolute top-0 left-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2),rgba(53,58,60,1))] z-10" />
            : <div className="w-full h-full absolute top-0 left-0 bg-black opacity-30 z-10" />
        }
        {
          !isMobile &&
                    <Waves className="absolute w-full left-0 bottom-0 z-[11] -mb-px" topColor="unset" variant={3} />
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
                <Waves topColor="var(--color-dark)" variant={3} />
      }
    </div>
  );
};

export default HeroSection;
