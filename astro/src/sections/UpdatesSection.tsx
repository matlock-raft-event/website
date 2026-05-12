import { useMemo } from "react";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import { toPlainText } from "@portabletext/react";

import logoSvg from "~/assets/images/logo.svg";
import Heading from "~/components/Heading";
import ImageCard from "~/components/ImageCard";
import Section from "~/components/Section";
import { Button } from "~/components/ui/button";
import useSanityFetch from "~/hooks/useSanityFetch";

const fallbackLogo = (logoSvg as { src?: string }).src ?? (logoSvg as unknown as string);

type Update = {
  title?: string;
  slug?: string;
  date?: string;
  img?: unknown;
  content?: unknown;
};

interface UpdatesSectionProps {
  preview?: boolean;
}

const UpdatesSection = ({ preview = false }: UpdatesSectionProps) => {
  const { data } = useSanityFetch<Update[]>(
    "*[_type == \"update\"]{ title, slug, date, img, content }"
  );

  const updates = useMemo(
    () => {
      if (!data) return [];
      const sorted = [...data].sort(
        (a, b) => Date.parse(b.date ?? "") - Date.parse(a.date ?? "")
      );
      return preview ? sorted.slice(0, 3) : sorted;
    },
    [data, preview]
  );

  const theme = useTheme();

  return (
    <Section bgColor={preview ? theme.palette.primary : theme.palette.secondary}>
      <Heading
        color={preview ? theme.palette.primary : theme.palette.secondary}
        subtitle="Keep ahead of the tide"
        title="Latest Updates"
      />
      <Grid2 container spacing={3}>
        {
          updates.map(update => (
            <Grid2 key={update.title} sm={4} xs={12}>
              <ImageCard
                aspectRatio="3 / 2"
                description={update.content ? toPlainText(update.content as never) : undefined}
                fallbackSrc={fallbackLogo}
                image={update.img}
                onClick={() => {
                  if (update.slug) window.location.href = `/updates/${update.slug}`;
                }}
                title={update.title ?? ""}
              />
            </Grid2>
          ))
        }
      </Grid2>
      {
        preview &&
                <Stack direction="row" justifyContent="center" mt={4}>
                  <Button href="/updates">View all updates</Button>
                </Stack>
      }
    </Section>
  );
};

export default UpdatesSection;
