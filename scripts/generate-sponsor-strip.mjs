import { writeFileSync } from "node:fs";

import { createClient } from "@sanity/client";

/* Build-time codegen for the footer's site-wide sponsor strip. The footer is
   part of every page's client island, so it can't fetch Sanity itself; this
   snapshots the sponsors into a module the footer imports. Runs as part of
   `pnpm build`; the output is committed so `pnpm dev` works without it. */
const client = createClient({
    projectId: "6m6e8mul",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: true
});

const sponsors = await client.fetch(`*[_type == "sponsor"]{ name, slug, logo } | order(lower(name) asc)`);

writeFileSync(
    new URL("../src/lib/sponsor-strip.json", import.meta.url),
    `${JSON.stringify(sponsors, null, 2)}\n`
);

console.log(`sponsor-strip.json: ${sponsors.length} sponsors`);
