import { useMemo, useRef, useState } from "react";
import Lightbox, { type CaptionsRef, type ThumbnailsRef, type ZoomRef } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import GotPhotosCard from "~/components/got-photos-card";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import SanityImage from "~/components/sanity-image";
import Section from "~/components/section";
import { galleryAlt, galleryAspectRatio, photoCount, type GalleryImage } from "~/lib/gallery";
import { urlFor } from "~/lib/sanity";

type Props = { year: string, images: GalleryImage[] };

/* One year of the archive: the page header, then the photos and nothing else.
   A year is a few dozen shots, so they all load — no paging, no filters. The
   credit and the year live in the lightbox, where they're actually read. */
const Content = ({ year, images }: Props) => {
  const captionsRef = useRef<CaptionsRef | null>(null);
  const thumbnailsRef = useRef<ThumbnailsRef | null>(null);
  const zoomRef = useRef<ZoomRef | null>(null);

  const [index, setIndex] = useState(-1);

  const slides = useMemo(
    () => images.map(image => ({
      src: image.img ? urlFor(image.img).width(2000).auto("format").url() : "",
      title: `Boxing Day ${year}`,
      description: image.author ? `Photo by ${image.author}` : undefined
    })),
    [images, year]
  );

  return (
    <>
      <main id="main" tabIndex={-1}>
        {/* One colour from the header to the closing. */}
        <PageHeader
          backLink={{ href: "/gallery", label: "All years" }}
          background="stripes"
          color="raft"
          eyebrow={photoCount(images.length)}
          title={`Gallery ${year}`}
        />
        <Section color="raft" plain>
          <div className="mx-auto w-full max-w-5xl px-4">
            {/* Tight and barely rounded, so it reads as one sheet of photos
                rather than a row of cards. Same 2px corner as every other
                photo on the site. The vertical space is padding on an
                inline-block, not a margin: a margin next to a column break can
                be carried to the top of the following column, which shows up
                as a stray gap that moves around as the photos change. */}
            <div className="columns-2 gap-2 sm:columns-3">
              {
                images.map((image, imageIndex) => (
                  <button
                    key={image._id}
                    aria-label={`Open photo ${imageIndex + 1} of ${images.length}`}
                    className="inline-block w-full appearance-none break-inside-avoid border-0 bg-transparent p-0 pb-2 align-top transition-transform duration-300 ease-out hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--surface-focus)"
                    onClick={() => setIndex(imageIndex)}
                    type="button"
                  >
                    <SanityImage
                      alt={galleryAlt(image)}
                      className="w-full rounded-[2px] cursor-pointer"
                      image={image.img}
                      style={{ aspectRatio: galleryAspectRatio(image), display: "block" }}
                      width={900}
                    />
                  </button>
                ))
              }
            </div>

            <GotPhotosCard />
          </div>
        </Section>
        <ClosingCta
          primary={{ label: "Take part", href: "/take-part" }}
          secondary={{ label: "Volunteer with us", href: "/volunteer" }}
          text="Fancy seeing yourself here next year? There's more than one way to get involved."
          title="Want to be in next year's photos?"
          waveTopColor="var(--color-raft)"
        />
        <Footer waveTopColor="var(--color-pine-dark)" />
      </main>

      <Lightbox
        captions={{ ref: captionsRef as never }}
        close={() => setIndex(-1)}
        index={index}
        on={{
          click: () => {
            (
              captionsRef.current?.visible
                ? captionsRef.current?.hide
                : captionsRef.current?.show
            )?.();
            (
              thumbnailsRef.current?.visible
                ? thumbnailsRef.current?.hide
                : thumbnailsRef.current?.show
            )?.();
          }
        }}
        open={index >= 0}
        plugins={[Captions, Thumbnails, Zoom]}
        slides={slides}
        styles={{
          root: {
            "--yarl__slide_captions_container_background": "rgba(0, 0, 0, .5)",
            "--yarl__color_backdrop": "rgba(0, 0, 0, .9)",
            "--yarl__thumbnails_thumbnail_height": "40px",
            "--yarl__thumbnails_thumbnail_width": "60px",
            "--yarl__thumbnails_thumbnail_active_border_color": "var(--color-sun)"
          }
        }}
        thumbnails={{ ref: thumbnailsRef as never }}
        zoom={{ ref: zoomRef as never }}
      />
    </>
  );
};

const GalleryYearPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default GalleryYearPage;
