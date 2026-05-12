import type { ReactNode } from "react";
import type { SxProps } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { TITLE_FONT_FAMILY } from "~/theme/typography";

type StepCardProps = {
  icon?: ReactNode;
  title: ReactNode;
  content: ReactNode;
  sx?: SxProps;
};
const StepCard = ({ icon, title, content, sx }: StepCardProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
        backgroundColor: theme.palette.secondary.light,
        boxShadow: theme.shadows[5],
        width: "100%",
        ...sx
      }}
      className="flex flex-row gap-4"
    >
      <Box pt={0.5}>
        {icon}
      </Box>
      <div className="flex flex-col gap-2">
        <Typography
          color="secondary.contrastText"
          fontFamily={TITLE_FONT_FAMILY}
          variant="h3"
        >
          {title}
        </Typography>
        {content}
      </div>
    </Box>
  );
};

export default StepCard;
