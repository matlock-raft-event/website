/* Undoes the August 2026 sponsor-logo trim: repoints every sponsor at the
   original, untrimmed asset it used before. Uploading the trimmed versions
   created new assets rather than overwriting, so the originals below are still
   in the dataset and this is a straight pointer swap.

   Run from studio/:  npx sanity exec ../scripts/restore-sponsor-logos.ts --with-user-token

   After running, regenerate the footer's snapshot: node scripts/generate-sponsor-strip.mjs
   Note the originals include one SVG (Ron Brooks), which needs the explicit
   height/width workaround in the footer to render at all. */
import { getCliClient } from "sanity/cli";

const ORIGINALS = [
    { _id: "c4455858-1ae1-4d0a-b254-9c9436526e95", name: "Darwin Forest", ref: "image-cd071ef59a0171cc0c7ff42dcb349436d65a38bf-969x567-jpg" },
    { _id: "0aa35071-0fc0-4e00-a530-732546fe6021", name: "H.A. Briddon", ref: "image-fa160bc5edb18f60dc715356a60749fa051b1701-356x100-jpg" },
    { _id: "76ede6d5-47fe-42f5-9c7d-c971da3abffd", name: "Heights of Abraham", ref: "image-4b2512673f30008f21202e1bb30191bfd095ff31-852x673-jpg" },
    { _id: "c23e7358-4ff7-450f-b9f0-1520eda9642d", name: "Longcliffe", ref: "image-22a1fb1c46af7bcc9979e75a02672c460c74f831-2362x975-png" },
    { _id: "2e54ec51-633f-4605-a7dc-65fba992f629", name: "Matlock Bath Parish Council", ref: "image-a0aee7c8851d33b7d0da4b2b38945b60b19312ca-829x828-jpg" },
    { _id: "8ded063a-f90d-433a-9d9d-925369230155", name: "Peak Rail", ref: "image-2140be6643cdea04606ddab31c9fc882ed9e0119-541x195-png" },
    { _id: "fc7c1a3d-083c-4cbb-8c27-c2b32147bf57", name: "Ron Brooks", ref: "image-7cc2fb2f20631c31c5984aca29fd6ff7c632f416-312x80-svg" },
    { _id: "6caf09dc-0ecd-4d73-8408-061a4dccc627", name: "The Fishpond", ref: "image-bfcb59c44a8029a7eec0a4c5e2fe760d68d8533c-520x640-png" },
    { _id: "3fafbb92-274b-4a4f-9b02-f663db98f42a", name: "The Garden Room", ref: "image-6caa98be60cc7359043165ef491aeaf01453788e-985x1013-jpg" },
    { _id: "ca214155-7e79-4b7f-a5a6-ecc954dfdb47", name: "Universal Group", ref: "image-b55a96970a682eb4c3add81bf82042b197dbbfd0-601x221-png" }
];

const main = async () => {
    const client = getCliClient({ apiVersion: "2025-08-15" });

    for (const { _id, name, ref } of ORIGINALS) {
        const current = await client.fetch(`*[_id == $id][0]{ logo }`, { id: _id });
        await client
            .patch(_id)
            .set({ logo: { ...current?.logo, _type: "image", asset: { _type: "reference", _ref: ref } } })
            .commit();
        console.log(`restored ${name}`);
    }

    console.log(`\n${ORIGINALS.length} sponsors restored. Now run: node scripts/generate-sponsor-strip.mjs`);
};

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
