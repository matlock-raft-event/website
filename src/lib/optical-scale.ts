/* Logo walls read as random when every mark is simply fitted to the same cell:
   a logo is limited by the cell's width or its height depending on its own
   aspect, so a wide wordmark ends up with three or four times the ink of a
   square badge even though both "fit". Scaling each logo back toward a common
   target area is what makes a wall look deliberate.

   The size lives in the Sanity asset ref (…-808x231-png), so this needs no
   extra CMS field and self-corrects when a logo is replaced. */

/** Share of its cell a logo should optically occupy. Tuned against the real
    sponsor set: the widest and squarest marks land within ~1.3x of each other. */
const TARGET_FILL = 0.53;

/** Floor on the shrink, so a very wide wordmark never becomes unreadable. */
const MIN_SCALE = 0.7;

const aspectFromRef = (ref: string | undefined) => {
    const dimensions = ref?.split("-").at(-2);
    const [width, height] = dimensions?.split("x").map(Number) ?? [];
    return width && height ? width / height : undefined;
};

type LogoLike = { asset?: { _ref?: string } } | null | undefined;

/**
 * Scale factor (0.7–1) to apply to a logo's bounding box inside a `cellWidth` x
 * `cellHeight` cell. Returns 1 when the asset's size can't be read.
 */
export const opticalScale = (logo: LogoLike, cellWidth: number, cellHeight: number) => {
    const aspect = aspectFromRef(logo?.asset?._ref);
    if (!aspect) return 1;

    const cellAspect = cellWidth / cellHeight;
    const area = aspect >= cellAspect
        ? (cellWidth * cellWidth) / aspect
        : cellHeight * cellHeight * aspect;

    return Math.min(1, Math.max(MIN_SCALE, Math.sqrt(TARGET_FILL / (area / (cellWidth * cellHeight)))));
};
