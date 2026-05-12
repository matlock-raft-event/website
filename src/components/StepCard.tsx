import type { ReactNode } from "react";

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
        <h3 className="text-secondary-contrast font-display font-bold text-2xl md:text-3xl">
          {title}
        </h3>
        {content}
      </div>
    </div>
  );
};

export default StepCard;
