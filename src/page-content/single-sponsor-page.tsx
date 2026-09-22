import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import Section from "~/components/section";
import SponsorItem from "~/components/sponsor-item";
import { Button } from "~/components/ui/button";
import type { SponsorsForPathsQueryResult } from "~/lib/sanity.types";

type SingleSponsorPageProps = {
  sponsor: SponsorsForPathsQueryResult[number];
};

const Content = ({ sponsor }: SingleSponsorPageProps) => {
  const title = sponsor.name ?? "Sponsor";

  return (
    <main id="main" tabIndex={-1}>
      <PageHeader background="wallpaper" color="pine-dark" eyebrow="Sponsor" title={title} />

      <Section palette="cream">
        {/* Same max-w-5xl width as the site's other grid and image sections */}
        <div className="mx-auto w-full max-w-5xl px-4">
          <a
            className="inline-flex items-center gap-1 font-label font-medium text-raft hover:underline"
            href="/sponsors"
          >
            <span aria-hidden="true">←</span>
            Back to all sponsors
          </a>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 sm:col-span-4">
              <SponsorItem
                altText={sponsor.name ?? undefined}
                image={sponsor.logoTrimmed ?? sponsor.logo}
                readOnly
              />
            </div>
            <div className="col-span-12 sm:col-span-8">
              <div className="flex flex-col gap-4">
                {
                  sponsor.description &&
                                  <div>
                                    <h6 className="font-label font-medium text-sm sm:text-base md:text-lg">What we do</h6>
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">{sponsor.description}</p>
                                  </div>
                }
                {
                  sponsor.address &&
                                  <div>
                                    <h6 className="font-label font-medium text-sm sm:text-base md:text-lg">Where to find us</h6>
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">{sponsor.address}</p>
                                  </div>
                }
                {
                  sponsor.url &&
                                  <div>
                                    <h6 className="font-label font-medium text-sm sm:text-base md:text-lg">Our website</h6>
                                    <a
                                      className="text-raft text-base hover:underline"
                                      href={sponsor.url}
                                      rel="noopener"
                                      target="_blank"
                                    >
                                      {sponsor.url}
                                    </a>
                                  </div>
                }
                {
                  sponsor.testimonial &&
                                  <div>
                                    <h6 className="font-label font-medium text-sm sm:text-base md:text-lg">Why we sponsored The Matlock Raft Event</h6>
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">{sponsor.testimonial}</p>
                                  </div>
                }
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-16">
            <Button href="/sponsors">View all sponsors</Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

const SingleSponsorPage = ({ sponsor }: SingleSponsorPageProps) => (
  <PageShell>
    <Content sponsor={sponsor} />
  </PageShell>
);

export default SingleSponsorPage;
