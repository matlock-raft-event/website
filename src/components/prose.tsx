import type { ReactNode } from "react";

/* The page's heading ladder, in one place:

   h1  the page title, printed by PageHeader — one per page
   h2  anything that names a top-level block of the page: a section's Heading,
       a Subheading below, the contact routes, a hall-of-fame year
   h3  repeated items nested inside a block that already has an h2

   Prose pages open straight onto their first Subheading under the masthead,
   so a Subheading is an h2 — h3 here would skip a level. */
const Subheading = ({ children }: { children: string }) => (
  <h2 className="font-display uppercase text-xl md:text-2xl mt-10 first:mt-0">
    {children}
  </h2>
);

const Para = ({ children }: { children: ReactNode }) => (
  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-3">
    {children}
  </p>
);

export { Para, Subheading };
