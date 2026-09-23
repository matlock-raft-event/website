/* Keeps every sponsor's cropped logo in step with the logo an editor uploaded.
   Run it after adding or replacing a sponsor logo:  pnpm trim-logos

   Sponsors supply logos with wildly different amounts of white space baked in,
   which makes the logo wall look random however carefully it's laid out. This
   crops a copy of each logo tight to its artwork and stores it alongside the
   original, so `logo` stays the untouched file the sponsor sent us and
   `logoTrimmed` is what the site actually renders.

   Only sponsors whose crop is missing or out of date are processed; set
   TRIM_FORCE=1 to redo every one. */
import { getCliClient } from "sanity/cli";
import sharp from "sharp";

const PROJECT_ID = "6m6e8mul";
const DATASET = "production";

/** Cap on the stored crop: the site never renders a logo near this big. */
const MAX_EDGE = 1200;

/** How aggressively near-white/near-transparent edges count as background. */
const TRIM_THRESHOLD = 12;

const force = process.env.TRIM_FORCE === "1";

type Sponsor = {
    _id: string;
    name?: string;
    slug?: string;
    logo?: { asset?: { _ref?: string } };
    logoTrimmed?: { asset?: { _ref?: string } };
    logoTrimmedFrom?: string;
};

const assetUrl = (ref: string) => {
    const [, id, dimensions, extension] = ref.split("-");
    return `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${id}-${dimensions}.${extension}`;
};

const trim = async (ref: string) => {
    const original = Buffer.from(await (await fetch(assetUrl(ref))).arrayBuffer());

    // Rasterise SVGs up front so vector and bitmap logos share one path — and
    // so the result has an intrinsic size, which dimensionless SVGs lack.
    const source = ref.endsWith("-svg")
        ? await sharp(original, { density: 600 }).png().toBuffer()
        : original;

    let data = await sharp(source).trim({ threshold: TRIM_THRESHOLD }).png().toBuffer();
    let { width = 0, height = 0 } = await sharp(data).metadata();

    if (Math.max(width, height) > MAX_EDGE) {
        data = await sharp(data)
            .resize({
                width: width >= height ? MAX_EDGE : undefined,
                height: height > width ? MAX_EDGE : undefined
            })
            .png({ compressionLevel: 9 })
            .toBuffer();
        ({ width = 0, height = 0 } = await sharp(data).metadata());
    }

    return { data, width, height };
};

const main = async () => {
    const client = getCliClient({ apiVersion: "2025-08-15" });

    const sponsors: Sponsor[] = await client.fetch(
        `*[_type == "sponsor"]{ _id, name, slug, logo, logoTrimmed, logoTrimmedFrom } | order(lower(name) asc)`
    );

    let updated = 0;
    let skipped = 0;

    for (const sponsor of sponsors) {
        const label = sponsor.name ?? sponsor._id;
        const sourceRef = sponsor.logo?.asset?._ref;

        if (!sourceRef) {
            console.log(`- ${label}: no logo uploaded, nothing to crop`);
            continue;
        }

        const stale = !sponsor.logoTrimmed?.asset?._ref || sponsor.logoTrimmedFrom !== sourceRef;
        if (!stale && !force) {
            skipped += 1;
            continue;
        }

        const { data, width, height } = await trim(sourceRef);
        const asset = await client.assets.upload("image", data, {
            filename: `${sponsor.slug ?? sponsor._id}-logo.png`
        });

        await client
            .patch(sponsor._id)
            .set({
                logoTrimmed: { _type: "image", asset: { _type: "reference", _ref: asset._id } },
                logoTrimmedFrom: sourceRef
            })
            .commit();

        const wasSvg = sourceRef.endsWith("-svg");
        console.log(`✓ ${label}: cropped to ${width}x${height}${wasSvg ? " (rasterised from SVG)" : ""}`);
        updated += 1;
    }

    console.log(
        `\n${updated} cropped, ${skipped} already up to date.${
            updated ? "\nRun `node scripts/generate-sponsor-strip.mjs` to refresh the footer snapshot." : ""
        }`
    );
};

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
