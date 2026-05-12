import donateImg from "~/assets/images/donate-img.jpg";
import helpOutImg from "~/assets/images/help-out-img.jpg";
import sponsorUsImg from "~/assets/images/sponsor-us-img.jpg";
import takePartImg from "~/assets/images/take-part-img.jpg";
import Heading from "~/components/heading";
import ImageLink from "~/components/image-link";
import Section from "~/components/section";
import useResponsive from "~/hooks/use-responsive";

const resolveSrc = (asset: unknown): string => (asset as { src?: string }).src ?? (asset as unknown as string);

const GetInvolvedSection = () => {
  const isMobile = useResponsive("down", "sm");

  return (
    <Section palette="yellow">
      <Heading palette="yellow" subtitle="It's for a mighty good cause" title="Get Involved" />

      <div className={`grid grid-cols-12 gap-6 ${isMobile ? "px-16" : ""}`}>
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <ImageLink href="/take-part" label="Take Part" src={resolveSrc(takePartImg)} />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <ImageLink href="/volunteer" label="Help Out" src={resolveSrc(helpOutImg)} />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <ImageLink href="/donate" label="Donate" src={resolveSrc(donateImg)} />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <ImageLink href="/sponsors" label="Sponsor Us" src={resolveSrc(sponsorUsImg)} />
        </div>
      </div>
    </Section>
  );
};

export default GetInvolvedSection;
