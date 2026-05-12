import { useMemo } from "react";

import Heading from "~/components/Heading";
import PodiumCard from "~/components/PodiumCard";
import Section from "~/components/Section";
import useResponsive from "~/hooks/useResponsive";
import type { WinnersQueryResult } from "~/lib/sanity.types";

type Props = { winners: WinnersQueryResult };

const PodiumSection = ({ winners }: Props) => {
  const firstPlace = winners?.find(item => item.position === 1);
  const secondPlace = winners?.find(item => item.position === 2);
  const thirdPlace = winners?.find(item => item.position === 3);

  const isMobile = useResponsive("down", "sm");

  const firstPlaceGridItem = (
    <div key="first" className="col-span-10 sm:col-span-4">
      {
        firstPlace?.img &&
                <PodiumCard
                  image={firstPlace.img}
                  podium={1}
                  title={firstPlace.name ?? ""}
                />
      }
    </div>
  );
  const secondPlaceGridItem = (
    <div key="second" className={`col-span-6 sm:col-span-4 ${isMobile ? "mt-0" : "mt-16"}`}>
      {
        secondPlace?.img &&
                <PodiumCard
                  image={secondPlace.img}
                  podium={2}
                  title={secondPlace.name ?? ""}
                />
      }
    </div>
  );
  const thirdPlaceGridItem = (
    <div key="third" className={`col-span-6 sm:col-span-4 ${isMobile ? "mt-0" : "mt-32"}`}>
      {
        thirdPlace?.img &&
                <PodiumCard
                  image={thirdPlace.img}
                  podium={3}
                  title={thirdPlace.name ?? ""}
                />
      }
    </div>
  );

  const orderedGridItems = useMemo(
    () => (isMobile
      ? [firstPlaceGridItem, secondPlaceGridItem, thirdPlaceGridItem]
      : [secondPlaceGridItem, firstPlaceGridItem, thirdPlaceGridItem]),
    [isMobile, winners]
  );

  return (
    <Section palette="green">
      <Heading palette="green" subtitle="Proud to present 2024's" title="Heroic Winners" />

      <div
        className={`grid grid-cols-12 gap-8 justify-items-center ${!isMobile ? "pt-8" : "pt-0"} ${isMobile ? "px-8" : ""}`}
      >
        {orderedGridItems.map(item => item)}
      </div>

    </Section>
  );
};

export default PodiumSection;
