import HeaderImg from "~/assets/images/header.jpg";
import Header from "~/components/header";
import Waves from "~/components/waves";
import useResponsive from "~/hooks/use-responsive";

const resolveSrc = (asset: unknown): string => (asset as { src?: string }).src ?? (asset as unknown as string);

interface InnerHeroSectionProps {
  wavesColor?: string;
}

const InnerHeroSection = ({ wavesColor }: InnerHeroSectionProps) => {
  const isMobile = useResponsive("down", "sm");

  return (
    <div style={{ position: "relative" }}>
      <Header />

      <div style={{ position: "relative" }}>
        {
          isMobile
            ? (
              <>
                <img
                  alt="Cover Image"
                  src={resolveSrc(HeaderImg)}
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "24 / 9",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                <div className="w-full h-[calc(100%+2px)] absolute top-0 left-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2),rgba(53,58,60,1))] z-10" />
              </>
            )
            : (
              <>
                <img
                  alt="Cover Image"
                  src={resolveSrc(HeaderImg)}
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "32 / 9",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-30 z-10" />
                <Waves className="absolute w-full left-0 bottom-0 z-[11] -mb-px" bottomColor={wavesColor} topColor="unset" variant={3} />
              </>
            )
        }
      </div>

      {
        isMobile &&
                <Waves topColor="var(--color-dark)" variant={3} />
      }
    </div>
  );
};

export default InnerHeroSection;
