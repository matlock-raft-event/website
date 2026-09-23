import { useMemo } from "react";

import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import GotPhotosCard from "~/components/got-photos-card";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import PhotoTile from "~/components/photo-tile";
import Section from "~/components/section";
import { galleryYears } from "~/lib/gallery";
import type { GalleryQueryResult } from "~/lib/sanity.types";

type Props = { galleryImages: GalleryQueryResult };

/* The archive gains a year every Boxing Day, so the gallery is an index of
   years and a page for each one. Every year gets the same tile: a photo from
   that year, a scrim dark enough to read on any picture, and the year on top. */
const Content = ({ galleryImages }: Props) => {
    const years = useMemo(() => galleryYears(galleryImages), [galleryImages]);

    return (
        <main id="main" tabIndex={-1}>
            <PageHeader background="stripes" color="raft" eyebrow="Every Boxing Day on the Derwent" title="Gallery" />
            <Section color="raft" plain>
                <div className="mx-auto w-full max-w-5xl px-4">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {
                            years.map(({
                                           year,
                                           images
                                       }) => (
                                <PhotoTile
                                    key={year}
                                    aspect="3 / 2"
                                    href={`/gallery/${year}`}
                                    image={images[0].img}
                                    title={year}
                                />
                            ))
                        }
                    </div>

                    <GotPhotosCard />
                </div>
            </Section>
            <ClosingCta
                primary={{
                    label: "Take part",
                    href: "/take-part"
                }}
                secondary={{
                    label: "Volunteer with us",
                    href: "/volunteer"
                }}
                text="Fancy seeing yourself here next year? There's more than one way to get involved."
                title="Want to be in next year's photos?"
                waveTopColor="var(--color-raft)"
            />
            <Footer waveTopColor="var(--color-pine-dark)" />
        </main>
    );
};

const GalleryPage = (props: Props) => (
    <PageShell>
        <Content {...props} />
    </PageShell>
);

export default GalleryPage;
