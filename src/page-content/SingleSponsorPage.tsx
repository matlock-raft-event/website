import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import PageShell from "~/components/PageShell";
import Section from "~/components/Section";
import SponsorItem from "~/components/SponsorItem";
import { Button } from "~/components/ui/button";
import Waves from "~/components/Waves";
import type { SponsorsForPathsQueryResult } from "~/lib/sanity.types";
import InnerHeroSection from "~/sections/InnerHeroSection";

type SingleSponsorPageProps = {
  sponsor: SponsorsForPathsQueryResult[number];
};

const Content = ({ sponsor }: SingleSponsorPageProps) => {
  const title = sponsor.name ?? "Sponsor";

  return (
    <main>
      <InnerHeroSection />

      <Section palette="cream">
        <Heading palette="cream" subtitle="Sponsor" title={title} />
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 sm:col-span-4">
            <SponsorItem altText={sponsor.name ?? undefined} image={sponsor.logo} readOnly />
          </div>
          <div className="col-span-12 sm:col-span-8">
            <div className="flex flex-col gap-4">
              {
                sponsor.description &&
                                <div>
                                  <h6 className="font-serif font-medium text-sm sm:text-base md:text-lg">What we do</h6>
                                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">{sponsor.description}</p>
                                </div>
              }
              {
                sponsor.address &&
                                <div>
                                  <h6 className="font-serif font-medium text-sm sm:text-base md:text-lg">Where to find us</h6>
                                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">{sponsor.address}</p>
                                </div>
              }
              {
                sponsor.url &&
                                <div>
                                  <h6 className="font-serif font-medium text-sm sm:text-base md:text-lg">Our website</h6>
                                  <a
                                    className="text-red text-base hover:underline"
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
                                  <h6 className="font-serif font-medium text-sm sm:text-base md:text-lg">Why we sponsored The Matlock Raft Event</h6>
                                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">{sponsor.testimonial}</p>
                                </div>
              }
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-16">
          <Button href="/sponsors">View all sponsors</Button>
        </div>
      </Section>

      <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />

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
