/** Astro image imports arrive as metadata objects in the build and plain
    strings in some tooling contexts — this narrows both to a usable src. */
export const resolveAssetSrc = (asset: unknown): string =>
  (asset as { src?: string }).src ?? (asset as unknown as string);
