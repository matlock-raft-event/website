import { useMemo } from "react";
import { toPlainText } from "@portabletext/react";

import Heading from "~/components/heading";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";
import UpdateCard from "~/components/update-card";
import type { UpdatesQueryResult } from "~/lib/sanity.types";

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

  /* Always cream: the homepage preview is the one light landing between the
     green "Coming to watch?" and the pine-dark closing, and the update cards
     are designed for a light ground. */
  return (
    <Section palette="cream">
      <Heading
        palette="cream"
        subtitle="Keep ahead of the tide"
        title="Latest Updates"
      />
      <div className="grid grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {
          sortedUpdates.map(update => (
            <div key={update.slug ?? update.title} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <UpdateCard
                date={update.date ?? undefined}
                description={update.content ? toPlainText(update.content as never) : undefined}
                href={update.slug ? `/updates/${update.slug}` : "/updates"}
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
