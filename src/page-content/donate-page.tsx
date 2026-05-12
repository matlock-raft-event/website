import Footer from "~/components/footer";
import Heading from "~/components/heading";
import PageShell from "~/components/page-shell";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";
import Waves from "~/components/waves";
import InnerHeroSection from "~/sections/inner-hero-section";

const Content = () => (
  <main>
    <InnerHeroSection />
    <Section palette="cream">
      <Heading palette="cream" subtitle="Help us to raise more than ever" title="Donate" />
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                            Every year, our volunteer bucket collectors are positioned along the route ready to collect
                            donations from our generous spectators. Can&apos;t make it this year or just can&apos;t wait
                            until Boxing Day to support the RNLI? donations can be made online now via GoFundMe to
                            help us raise money for this amazing cause. Any and all donations are appreciated so
                            greatly. Even the smallest of amounts can help to make a difference. Thank you all for
                            your support.
          </p>
          <Button
            href="https://www.facebook.com/donate/1909444776644638/?fundraiser_source=external_url"
            rel="noreferrer"
            target="_blank"
          >
                            Donate Online Now
          </Button>
        </div>
      </div>
    </Section>
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
    <Footer />
  </main>
);

const DonatePage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default DonatePage;
