import { useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";

import Heading from "~/components/Heading";
import PodiumCard from "~/components/PodiumCard";
import Section from "~/components/Section";
import useResponsive from "~/hooks/useResponsive";
import useSanityFetch from "~/hooks/useSanityFetch";

type Winner = {
    name?: string;
    year?: number;
    position?: number;
    img?: unknown;
};

const PodiumSection = () => {
    const { data: winners } = useSanityFetch<Winner[]>(
        `*[_type == "winner"]{ name, year, position, img }`
    );

    const firstPlace = winners?.find(item => item.position === 1);
    const secondPlace = winners?.find(item => item.position === 2);
    const thirdPlace = winners?.find(item => item.position === 3);

    const isMobile = useResponsive("down", "sm");

    const firstPlaceGridItem = (
        <Grid2 key="first" sm={4} xs={10}>
            {
                firstPlace?.img &&
                <PodiumCard
                    image={firstPlace.img}
                    podium={1}
                    title={firstPlace.name ?? ""}
                />
            }
        </Grid2>
    );
    const secondPlaceGridItem = (
        <Grid2 key="second" mt={isMobile ? 0 : 8} sm={4} xs={6}>
            {
                secondPlace?.img &&
                <PodiumCard
                    image={secondPlace.img}
                    podium={2}
                    title={secondPlace.name ?? ""}
                />
            }
        </Grid2>
    );
    const thirdPlaceGridItem = (
        <Grid2 key="third" mt={isMobile ? 0 : 16} sm={4} xs={6}>
            {
                thirdPlace?.img &&
                <PodiumCard
                    image={thirdPlace.img}
                    podium={3}
                    title={thirdPlace.name ?? ""}
                />
            }
        </Grid2>
    );

    const orderedGridItems = useMemo(
        () => (isMobile
            ? [firstPlaceGridItem, secondPlaceGridItem, thirdPlaceGridItem]
            : [secondPlaceGridItem, firstPlaceGridItem, thirdPlaceGridItem]),
        [isMobile, winners]
    );

    const theme = useTheme();
    return (
        <Section bgColor={theme.palette.green}>
            <Heading color={theme.palette.green} subtitle="Proud to present 2024's" title="Heroic Winners" />

            <Grid2
                container
                justifyContent="center"
                pt={!isMobile ? 4 : 0}
                spacing={4}
                sx={{ ...(isMobile && { paddingX: 4 }) }}
            >
                {orderedGridItems.map(item => item)}
            </Grid2>

        </Section>
    );
};

export default PodiumSection;
