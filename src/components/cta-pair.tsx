import { Button } from "~/components/ui/button";

export type CtaLink = { label: string, href: string };

type CtaPairProps = {
  primary: CtaLink;
  secondary?: CtaLink;
  /** Colour semantics per the design language: cream navigates on dark
      surfaces, sun donates. The primary is always raft. */
  secondaryColor?: "cream" | "sun";
  className?: string;
};

/** The primary/secondary action pair used by the hero and the closing. */
const CtaPair = ({ primary, secondary, secondaryColor = "cream", className = "" }: CtaPairProps) => (
  <div className={`flex flex-row flex-wrap items-center justify-center gap-4 ${className}`}>
    <Button href={primary.href} size="lg">
      {primary.label}
    </Button>
    {
      secondary &&
        <Button color={secondaryColor} href={secondary.href} size="lg">
          {secondary.label}
        </Button>
    }
  </div>
);

export default CtaPair;
