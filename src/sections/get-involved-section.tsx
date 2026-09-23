import Heading from "~/components/heading";
import PhotoTile from "~/components/photo-tile";
import Reveal from "~/components/reveal";
import Section from "~/components/section";

/** One picture, already run through Astro's image pipeline by index.astro. */
export type GetInvolvedImage = { src: string; srcSet?: string };

type Props = { images?: GetInvolvedImage[] };

/* Tilt, label and destination per card, in the order index.astro builds the
   pictures. The pictures are not imported here: an import inside this island
   would ship the raw multi-megabyte JPEG instead of the resized webp. */
const CARDS = [
  { label: "Take Part", href: "/take-part", tilt: "rotate-[-1.6deg]" },
  { label: "Volunteer", href: "/volunteer", tilt: "rotate-[1.2deg]" },
  { label: "Donate", href: "/donate", tilt: "rotate-[-1deg]" },
  { label: "Sponsor Us", href: "/sponsors", tilt: "rotate-[1.8deg]" }
];

/* Four pictures at a quarter of the row on desktop, so the browser never needs
   the full-width source. */
const CARD_SIZES = "(min-width: 960px) 240px, (min-width: 600px) 45vw, 90vw";

const GetInvolvedSection = ({ images = [] }: Props) => {
  return (
    <Section color="river">
      {/* Same max-w-5xl width as the site's other grid and image sections */}
      <div className="mx-auto w-full max-w-5xl px-4">
        <Heading palette="river" subtitle="It's for a mighty good cause" title="Get Involved" />

        {/* Slight outward tilts per the design language; cards straighten on hover */}
        <Reveal>
          <div className="grid grid-cols-12 gap-6 px-16 sm:px-0">
            {
              CARDS.map((card, i) => (
                <div
                  key={card.href}
                  className={`col-span-12 sm:col-span-6 md:col-span-3 ${card.tilt} transition-transform duration-300 hover:rotate-0`}
                >
                  {/* The same tile the gallery and info pages use, so a
                      photograph never carries type without its scrim. */}
                  <PhotoTile
                    aspect="3 / 2"
                    href={card.href}
                    sizes={CARD_SIZES}
                    src={images[i]?.src}
                    srcSet={images[i]?.srcSet}
                    title={card.label}
                  />
                </div>
              ))
            }
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default GetInvolvedSection;
