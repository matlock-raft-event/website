import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { styled, useTheme } from "@mui/material/styles";

const StyledSvgContainer = styled("div")({});

type DivProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">;

type WavesProps = DivProps & {
  bottomColor?: string
  topColor?: string;
  variant?: 1 | 2 | 3 | 4;
};
const Waves = ({
  variant = 1,
  topColor,
  bottomColor,
  ...other
}: WavesProps) => {
  const theme = useTheme();

  const variant1 = "M0 50L120 55.5556C240 61.1111 480 72.2222 720 75C960 77.7778 1200 72.2222 1320 69.4444L1440 66.6667V100H1320C1200 100 960 100 720 100C480 100 240 100 120 100H0V50Z";
  const variant2 = "M0 100L60 91.4384C120 82.8767 240 65.7534 360 57.1918C480 48.6301 600 48.6301 720 52.4353C840 56.2405 960 63.8508 1080 67.656C1200 71.4612 1320 71.4612 1380 71.4612H1440V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z";
  const variant3 = "M0 56.1607L60 59.8139C120 63.4672 240 70.7738 360 67.1205C480 63.4672 600 48.8541 720 50.0719C840 51.2896 960 68.3383 1080 71.9915C1200 75.6448 1320 65.9027 1380 61.0317L1440 56.1607V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V56.1607Z";
  const variant4 = "M0 50L60 56.9444C120 63.8889 240 77.7778 360 79.1667C480 80.5556 600 69.4444 720 68.0556C840 66.6667 960 75 1080 75C1200 75 1320 66.6667 1380 62.5L1440 58.3333V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z";

  const variants = [
    variant1, variant2, variant3, variant4
  ];

  return (
    <StyledSvgContainer {...other}>
      <svg
        fill="none"
        height="100%"
        preserveAspectRatio="none"
        style={{ display: "block" }}
        viewBox="0 0 1440 100"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill={topColor ?? theme.palette.primary.main} height="100%" width="100%" />
        <path
          clipRule="evenodd"
          d={variants[variant - 1]}
          fill={bottomColor ?? theme.palette.secondary.main}
          fillRule="evenodd"
        />
      </svg>
    </StyledSvgContainer>
  );
};

export default Waves;
