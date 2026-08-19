import donateImg from "~/assets/images/donate-img.jpg";
import helpOutImg from "~/assets/images/help-out-img.jpg";
import sponsorUsImg from "~/assets/images/sponsor-us-img.jpg";
import takePartImg from "~/assets/images/take-part-img.jpg";
import Heading from "~/components/heading";
import ImageLink from "~/components/image-link";
import Section from "~/components/section";

const resolveSrc = (asset: unknown): string => (asset as { src?: string }).src ?? (asset as unknown as string);

const GetInvolvedSection = () => {
  return (
    <Section palette="sun">
      <Heading palette="sun" subtitle="It's for a mighty good cause" title="Get Involved" />

      {/* Slight outward tilts per the design language; cards straighten on hover */}
      <div className="grid grid-cols-12 gap-6 px-16 sm:px-0">
        <div className="col-span-12 sm:col-span-6 md:col-span-3 rotate-[-1.6deg] transition-transform duration-300 hover:rotate-0">
          <ImageLink href="/take-part" label="Take Part" src={resolveSrc(takePartImg)} />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 rotate-[1.2deg] transition-transform duration-300 hover:rotate-0">
          <ImageLink href="/volunteer" label="Volunteer with us" src={resolveSrc(helpOutImg)} />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 rotate-[-1deg] transition-transform duration-300 hover:rotate-0">
          <ImageLink href="/donate" label="Donate" src={resolveSrc(donateImg)} />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 rotate-[1.8deg] transition-transform duration-300 hover:rotate-0">
          <ImageLink href="/sponsors" label="Sponsor Us" src={resolveSrc(sponsorUsImg)} />
        </div>
      </div>
    </Section>
  );
};

export default GetInvolvedSection;
