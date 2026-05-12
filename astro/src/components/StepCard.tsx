import type { ReactNode } from "react";
import type { SxProps } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
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
    <Stack
      direction="row"
      spacing={2}
      sx={{
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
        backgroundColor: theme.palette.secondary.light,
        boxShadow: theme.shadows[5],
        width: "100%",
        ...sx
      }}
    >
      <Box pt={0.5}>
        {icon}
      </Box>
      <Stack spacing={1}>
        <Typography
          color="secondary.contrastText"
          fontFamily={TITLE_FONT_FAMILY}
          variant="h3"
        >
          {title}
        </Typography>
        {content}
      </Stack>
    </Stack>
  );
};

export default StepCard;
