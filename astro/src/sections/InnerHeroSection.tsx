import { styled, useTheme } from "@mui/material/styles";

import HeaderImg from "~/assets/images/header.jpg";
import Header from "~/components/Header";
import Waves from "~/components/Waves";
import useResponsive from "~/hooks/useResponsive";

const resolveSrc = (asset: unknown): string => (asset as { src?: string }).src ?? (asset as unknown as string);

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

interface InnerHeroSectionProps {
  wavesColor?: string;
}

const InnerHeroSection = ({ wavesColor }: InnerHeroSectionProps) => {
  const theme = useTheme();
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
                <StyledGradient />
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
                <StyledOverlay />
                <StyledWaves bottomColor={wavesColor} topColor="unset" variant={3} />
              </>
            )
        }
      </div>

      {
        isMobile &&
                <Waves topColor={theme.palette.dark.main} variant={3} />
      }
    </div>
  );
};

export default InnerHeroSection;
