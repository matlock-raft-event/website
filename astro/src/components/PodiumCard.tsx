import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import PodiumBadge from "~/components/PodiumBadge";
import SanityImage from "~/components/SanityImage";
import { TITLE_FONT_FAMILY } from "~/theme/typography";

const StyledDiv = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "4%",
  paddingBottom: "8%",
  borderRadius: 2,
  backgroundColor: "#ffffff",
  boxShadow: theme.shadows[5],
  transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
  display: "flex"
}));

interface PodiumCardProps {
  image: unknown;
  podium: 1 | 2 | 3;
  title: string;
}

const PodiumCard = ({ image, podium, title }: PodiumCardProps) => (
  <StyledDiv>
    <div
      style={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "-10%",
        zIndex: 99,
        left: 0
      }}
    >
      <PodiumBadge className="h-[inherit] w-1/4" podium={podium} />
    </div>
    <div className="flex flex-col gap-2">
      <SanityImage
        alt={title}
        image={image}
        style={{
          height: "100%",
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          borderRadius: 2,
          maxHeight: "100%",
          maxWidth: "100%"
        }}
      />
      <Typography fontFamily={TITLE_FONT_FAMILY} sx={{ textAlign: "center" }} variant="h4">
        {title}
      </Typography>
    </div>
  </StyledDiv>
);

export default PodiumCard;
