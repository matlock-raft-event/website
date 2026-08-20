import { useMemo } from "react";

import Footer from "~/components/footer";
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

  const lastPalette = years.length % 2 === 1 ? "pine" : "cream";

  return (
    <main id="main" tabIndex={-1}>
      <InnerHeroSection eyebrow="Our champions through the years"
        title="Hall of fame"
        wavesColor={years.length === 0 ? "var(--color-cream)" : "var(--color-pine)"}
      />

      {
        years.length === 0 && (
          <Section palette="cream">
            <p className="mx-auto w-full max-w-4xl px-4 text-center text-sm sm:text-base lg:text-lg leading-relaxed">
              Our champions through the years will appear here soon.
            </p>
          </Section>
        )
      }

      {
        years.map((year, index) => {
          // Year sections alternate pine/cream. The page heading lives inside
          // the first section so title and content always share a surface;
          // each year gets a compact marker above its podium.
          const palette = index % 2 === 0 ? "pine" : "cream";
          const prevPalette = index % 2 === 1 ? "pine" : "cream";

          return (
            <div key={year}>
              {
                index > 0 && (
                  <Waves
                    bottomColor={`var(--color-${palette})`}
                    style={{ marginTop: -1 }}
                    topColor={`var(--color-${prevPalette})`}
                    variant={((index % 4) + 1) as 1 | 2 | 3 | 4}
                  />
                )
              }
              <Section palette={palette}>
                <h3 className={`font-display uppercase text-2xl sm:text-3xl text-center ${palette === "pine" ? "text-sun" : "text-ink"}`}>
                  {year}
                </h3>
                <PodiumGrid tiltSeed={index} winners={winnersForYear(year)} />
              </Section>
            </div>
          );
        })
      }
      <Footer waveTopColor={`var(--color-${years.length === 0 ? "cream" : lastPalette})`} />
    </main>
  );
};

const HallOfFamePage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default HallOfFamePage;
