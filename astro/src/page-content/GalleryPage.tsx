import type { MouseEvent } from "react";
import { useMemo, useRef, useState } from "react";
import { Masonry } from "@mui/lab";
import { Container, ImageListItem, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import ImageCard from "~/components/ImageCard";
import PageShell from "~/components/PageShell";
import Section from "~/components/Section";
import Waves from "~/components/Waves";
import useResponsive from "~/hooks/useResponsive";
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
  const theme = useTheme();

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

  const handleYearFilter = (_event: MouseEvent<HTMLElement>, newYearFilter: string | null) => {
    if (newYearFilter) setYearFilter(newYearFilter);
  };

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

  const isMobile = useResponsive("down", "sm");

  return (
    <>
      <main>
        <InnerHeroSection />
        <Section bgColor={theme.palette.secondary}>
          <Heading color={theme.palette.secondary} subtitle="It’s everything it looks" title="Gallery" />

          <Stack alignItems="center" spacing={1}>
            <Container maxWidth="md">
              <Typography variant="body1">
                                Do you have photos we can feature in our gallery? Direct message them to us on Facebook
                                or post them in our Facebook group and your photos could be featured right here!
              </Typography>
            </Container>
            <div>
              <ToggleButtonGroup
                aria-label="year"
                exclusive
                onChange={handleYearFilter}
                size="small"
                value={activeYear}
              >
                {
                  yearFilters.map(value => (
                    <ToggleButton
                      key={value}
                      aria-label={value}
                      color="red"
                      sx={{ border: "none", textTransform: "uppercase" }}
                      value={value}
                    >
                      {value}
                    </ToggleButton>
                  ))
                }
              </ToggleButtonGroup>
            </div>

            <Masonry columns={isMobile ? 2 : 4} spacing={2}>
              {
                filteredGalleryData.map((image, imageIndex) => (
                  image.img
                    ? (
                      <ImageListItem key={image._id}>
                        <ImageCard
                          hideBorders
                          image={image.img}
                          onClick={() => setIndex(imageIndex)}
                        />
                      </ImageListItem>
                    )
                    : null
                ))
              }
            </Masonry>

          </Stack>

        </Section>
        <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.secondary.main} variant={2} />
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
            "--yarl__thumbnails_thumbnail_active_border_color": theme.palette.yellow.main
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
