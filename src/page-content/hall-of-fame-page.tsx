import { useMemo } from "react";

import Footer from "~/components/footer";
import Heading from "~/components/heading";
import PageShell from "~/components/page-shell";
import PodiumGrid from "~/components/podium-grid";
import Section from "~/components/section";
import Waves from "~/components/waves";
import type { WinnersQueryResult } from "~/lib/sanity.types";
import InnerHeroSection from "~/sections/inner-hero-section";

type Props = { winners: WinnersQueryResult };

const Content = ({ winners }: Props) => {
  const years = useMemo(
    () => [...new Set((winners ?? []).map(w => w.year).filter((y): y is number => Boolean(y)))]
      .sort((a, b) => b - a),
    [winners]
  );

  const winnersForYear = (year: number) => (winners ?? [])
    .filter(w => w.year === year);

  return (
    <main id="main" tabIndex={-1}>
      <InnerHeroSection title="Hall of fame" wavesColor="var(--color-cream)" />
      <Section palette="cream">
        <Heading
          palette="cream"
          subtitle="Our champions through the years"
          title="Hall of Fame"
        />

        {
          years.length === 0 && (
            <p className="mx-auto w-full max-w-4xl px-4 text-center text-sm sm:text-base lg:text-lg leading-relaxed">
              Our champions through the years will appear here soon.
            </p>
          )
        }
      </Section>

      {
        years.map((year, index) => {
          // Year sections alternate green/cream; the intro section above is cream.
          const palette = index % 2 === 0 ? "pine" : "cream";
          const prevPalette = index % 2 === 1 ? "pine" : "cream";

          return (
            <div key={year}>
              <Waves
                bottomColor={`var(--color-${palette})`}
                style={{ marginTop: -1 }}
                topColor={`var(--color-${prevPalette})`}
                variant={((index % 4) + 1) as 1 | 2 | 3 | 4}
              />
              <Section palette={palette}>
                <Heading
                  palette={palette}
                  subtitle="The champions of"
                  title={`${year}`}
                />
                <PodiumGrid tiltSeed={index} winners={winnersForYear(year)} />
              </Section>
            </div>
          );
        })
      }

      <Waves
        bottomColor="var(--color-cream)"
        style={{ marginTop: -1 }}
        topColor={
          years.length % 2 === 1
            ? "var(--color-pine)"
            : "var(--color-cream)"
        }
        variant={2}
      />
      <Footer />
    </main>
  );
};

const HallOfFamePage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default HallOfFamePage;
