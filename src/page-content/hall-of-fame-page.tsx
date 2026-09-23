import { useMemo } from "react";

import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import PodiumGrid from "~/components/podium-grid";
import Section from "~/components/section";
import type { WinnersQueryResult } from "~/lib/sanity.types";

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
      <PageHeader
        background="wallpaper"
        color="pine"
        eyebrow="Our champions through the years"
        eyebrowStyle="ribbon"
        title="Hall of fame"
      />

      {
        years.length === 0 && (
          <Section color="pine" plain>
            <p className="mx-auto w-full max-w-4xl px-4 text-center text-sm sm:text-base lg:text-lg leading-relaxed">
              Our champions through the years will appear here soon.
            </p>
          </Section>
        )
      }

      {
        years.map((year, index) => {
          // One ground for the whole page, so the years no longer alternate
          // and need no wave between them; each gets a compact marker above
          // its podium.
          return (
            <div key={year}>
              <Section color="pine" plain>
                {/* Same max-w-5xl width as the site's other grid and image sections */}
                <div className="mx-auto w-full max-w-5xl px-4">
                  <h2 className="font-display uppercase text-2xl sm:text-3xl text-center text-sun">
                    {year}
                  </h2>
                  <PodiumGrid tiltSeed={index} winners={winnersForYear(year)} />
                </div>
              </Section>
            </div>
          );
        })
      }
      <Footer waveTopColor="var(--color-pine)" />
    </main>
  );
};

const HallOfFamePage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default HallOfFamePage;
