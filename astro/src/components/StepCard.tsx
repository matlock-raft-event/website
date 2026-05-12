import type { ReactNode } from "react";
import { Typography } from "@mui/material";

import { TITLE_FONT_FAMILY } from "~/theme/typography";

type StepCardProps = {
  icon?: ReactNode;
  title: ReactNode;
  content: ReactNode;
};
const StepCard = ({ icon, title, content }: StepCardProps) => {
  return (
    <div className="flex flex-row gap-4 rounded-[2px] p-4 bg-cream-light shadow-[7px_7px_0_0_rgba(0,0,0,0.25)] w-full">
      <div className="pt-1">
        {icon}
      </div>
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
    </div>
  );
};

export default StepCard;
