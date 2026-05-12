import { useMemo } from "react";
import { useTheme } from "@mui/material/styles";
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
      <div className="grid grid-cols-12 gap-6">
        {
          updates.map(update => (
            <div key={update.title} className="col-span-12 sm:col-span-4">
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
            </div>
          ))
        }
      </div>
      {
        preview &&
                <div className="flex flex-row justify-center mt-8">
                  <Button href="/updates">View all updates</Button>
                </div>
      }
    </Section>
  );
};

export default UpdatesSection;
