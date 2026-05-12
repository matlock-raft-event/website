import { useMemo } from "react";
import { toPlainText } from "@portabletext/react";

import logoSvg from "~/assets/images/logo.svg";
import Heading from "~/components/Heading";
import ImageCard from "~/components/ImageCard";
import Section from "~/components/Section";
import { Button } from "~/components/ui/button";
import type { UpdatesQueryResult } from "~/lib/sanity.types";

const fallbackLogo = (logoSvg as { src?: string }).src ?? (logoSvg as unknown as string);

interface UpdatesSectionProps {
  preview?: boolean;
  updates: UpdatesQueryResult;
}

const UpdatesSection = ({ preview = false, updates }: UpdatesSectionProps) => {
  const sortedUpdates = useMemo(
    () => {
      if (!updates) return [];
      const sorted = [...updates].sort(
        (a, b) => Date.parse(b.date ?? "") - Date.parse(a.date ?? "")
      );
      return preview ? sorted.slice(0, 3) : sorted;
    },
    [updates, preview]
  );

  return (
    <Section palette={preview ? "mint" : "cream"}>
      <Heading
        palette={preview ? "mint" : "cream"}
        subtitle="Keep ahead of the tide"
        title="Latest Updates"
      />
      <div className="grid grid-cols-12 gap-6">
        {
          sortedUpdates.map(update => (
            <div key={update.title} className="col-span-12 sm:col-span-4">
              <ImageCard
                aspectRatio="3 / 2"
                description={update.content ? toPlainText(update.content as never) : undefined}
                fallbackSrc={fallbackLogo}
                href={update.slug ? `/updates/${update.slug}` : undefined}
                image={update.img}
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
