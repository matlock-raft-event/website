import donateImg from "~/assets/images/donate-img.jpg";
import Block from "~/components/block";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import SanityImage from "~/components/sanity-image";
import Section from "~/components/section";
import useResponsive from "~/hooks/use-responsive";
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

  const isMobile = useResponsive("down", "sm");

  return (
    <main id="main" tabIndex={-1}>
      <PageHeader color="pine" eyebrow={createdOn} eyebrowStyle="plain" title={title} />

      <Section palette="cream">
        {/* Same max-w-5xl width as the site's other grid and image sections */}
        <div className="mx-auto w-full max-w-5xl px-4">
          <a
            className="inline-flex items-center gap-1 font-label font-medium text-raft hover:underline"
            href="/updates"
          >
            <span aria-hidden="true">←</span>
            Back to all updates
          </a>
          <div
            className={`grid grid-cols-12 gap-8 justify-items-center ${!isMobile ? "pt-8" : "pt-0"} ${isMobile ? "px-8" : ""}`}
          >
            <div className="col-span-9 sm:col-span-5 order-2 sm:order-1">
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
            <div className="col-span-12 sm:col-span-7 order-1 sm:order-2">
              <div className="mt-8">
                {content ? <Block value={content as never} /> : null}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

const SingleUpdatePage = ({ update }: SingleUpdatePageProps) => (
  <PageShell>
    <Content update={update} />
  </PageShell>
);

export default SingleUpdatePage;
