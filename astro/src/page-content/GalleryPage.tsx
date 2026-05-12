import { useMemo, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import ImageCard from "~/components/ImageCard";
import PageShell from "~/components/PageShell";
import Section from "~/components/Section";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle";
import Waves from "~/components/Waves";
import useSanityFetch from "~/hooks/useSanityFetch";
import { urlFor } from "~/lib/sanity";
import InnerHeroSection from "~/sections/InnerHeroSection";

type GalleryImage = {
  _id?: string;
  year?: number;
  author?: string;
  img?: unknown;
};

type CaptionsRef = {
  visible: boolean;
  show: () => void;
  hide: () => void;
};
type ThumbnailRef = {
  visible: boolean;
  show: () => void;
  hide: () => void;
};
type ZoomRef = {
  zoomIn: () => void;
  zoomOut: () => void;
};

const Content = () => {
  const captionsRef = useRef<CaptionsRef>(null);
  const thumbnailsRef = useRef<ThumbnailRef>(null);
  const zoomRef = useRef<ZoomRef>(null);

  const { data } = useSanityFetch<GalleryImage[]>(
    "*[_type == \"galleryImage\"]{ _id, year, author, img }"
  );
  const galleryData = useMemo(() => data ?? [], [data]);

  const [index, setIndex] = useState(-1);

  const yearFilters = useMemo(
    () => [...new Set(galleryData.map(item => item.year?.toString()))]
      .filter((y): y is string => Boolean(y))
      .sort((a, b) => Number(a) - Number(b)),
    [galleryData]
  );

  const [yearFilter, setYearFilter] = useState<string | undefined>(undefined);
  const activeYear = yearFilter ?? yearFilters[yearFilters.length - 1];

  const filteredGalleryData = useMemo(
    () => galleryData.filter(item => item.year?.toString() === activeYear),
    [galleryData, activeYear]
  );

  const filteredSlides = useMemo(
    () => filteredGalleryData
      .map(item => ({
        src: item.img ? urlFor(item.img).width(2000).auto("format").url() : "",
        description: item.author ? `Photo by ${item.author}` : null
      }))
      .filter(slide => slide.src),
    [filteredGalleryData]
  );

  return (
    <>
      <main>
        <InnerHeroSection />
        <Section palette="cream">
          <Heading palette="cream" subtitle="It’s everything it looks" title="Gallery" />

          <div className="flex flex-col items-center gap-2">
            <div className="mx-auto w-full max-w-4xl px-4">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                                Do you have photos we can feature in our gallery? Direct message them to us on Facebook
                                or post them in our Facebook group and your photos could be featured right here!
              </p>
            </div>
            <div>
              <ToggleGroup
                aria-label="year"
                onValueChange={(values: string[]) => {
                  if (values[0]) setYearFilter(values[0]);
                }}
                value={activeYear ? [activeYear] : []}
              >
                {
                  yearFilters.map(value => (
                    <ToggleGroupItem
                      key={value}
                      aria-label={value}
                      className="uppercase border-0"
                      value={value}
                    >
                      {value}
                    </ToggleGroupItem>
                  ))
                }
              </ToggleGroup>
            </div>

            <div className="columns-2 sm:columns-4 gap-4">
              {
                filteredGalleryData.map((image, imageIndex) => (
                  image.img
                    ? (
                      <div key={image._id} className="mb-4 break-inside-avoid">
                        <ImageCard
                          hideBorders
                          image={image.img}
                          onClick={() => setIndex(imageIndex)}
                        />
                      </div>
                    )
                    : null
                ))
              }
            </div>

          </div>

        </Section>
        <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
        <Footer />
      </main>

      <Lightbox
        captions={{ ref: captionsRef }}
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
        slides={filteredSlides}
        styles={{
          root: {
            "--yarl__slide_captions_container_background": "rgba(0, 0, 0, .5)",
            "--yarl__color_backdrop": "rgba(0, 0, 0, .9)",
            "--yarl__thumbnails_thumbnail_height": "40px",
            "--yarl__thumbnails_thumbnail_width": "60px",
            "--yarl__thumbnails_thumbnail_active_border_color": "var(--color-yellow)"
          }
        }}
        thumbnails={{ ref: thumbnailsRef }}
        zoom={{ ref: zoomRef }}
      />
    </>
  );
};

const GalleryPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default GalleryPage;
