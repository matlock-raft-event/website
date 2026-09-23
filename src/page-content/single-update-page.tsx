import donateImg from "~/assets/images/donate-img.jpg";
import Block from "~/components/block";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import SanityImage from "~/components/sanity-image";
import Section from "~/components/section";
import type { UpdatesForPathsQueryResult } from "~/lib/sanity.types";
import { resolveAssetSrc } from "~/lib/assets";

type SingleUpdatePageProps = {
  update: UpdatesForPathsQueryResult[number];
};

const Content = ({ update }: SingleUpdatePageProps) => {
  const title = update.title ?? "Update";
  const { content } = update;
  const createdOn = update.date ? new Date(update.date).toDateString() : undefined;
  const image = update.img;

  return (
    <main id="main" tabIndex={-1}>
      <PageHeader backLink={{ href: "/updates", label: "Latest updates" }} color="cream" eyebrow={createdOn} eyebrowStyle="plain" title={title} />

      <Section color="cream" plain>
        {/* Same max-w-5xl width as the site's other grid and image sections */}
        <div className="mx-auto w-full max-w-5xl px-4">
          {/* Phones stack the text above the photo card; from sm the card sits
              beside the text. Pure CSS, so the server and client render the
              same markup. */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-12 sm:pt-8">
            <div className="order-2 w-3/4 justify-self-center sm:order-1 sm:col-span-5 sm:w-full">
              <div className="bg-white p-[1%] pb-[2%] shadow-[7px_7px_0_0_rgba(0,0,0,0.25)]">
                {
                  image
                    ? (
                      <SanityImage
                        alt={title}
                        image={image}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                          objectPosition: "center",
                          borderRadius: 2,
                          display: "block"
                        }}
                      />
                    )
                    : (
                      <img
                        alt={title}
                        src={resolveAssetSrc(donateImg)}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block"
                        }}
                      />
                    )
                }
              </div>
            </div>
            <div className="order-1 min-w-0 sm:order-2 sm:col-span-7">
              <div className="sm:mt-8">
                {content ? <Block startLevel={2} value={content as never} /> : null}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer waveTopColor="var(--color-cream)" />
    </main>
  );
};

const SingleUpdatePage = ({ update }: SingleUpdatePageProps) => (
  <PageShell>
    <Content update={update} />
  </PageShell>
);

export default SingleUpdatePage;
