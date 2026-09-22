import { cva } from "class-variance-authority";

/* How the eyebrow line is shown. Sticker and ribbon are physical objects
   that overlap the top of the title (see the wrapper in the eyebrow part);
   plain is the quiet option for serious pages. Colours come from the
   header's surface. */
const pageHeaderEyebrowVariants = cva("label-caps", {
  variants: {
    style: {
      sticker:
        "inline-flex -rotate-4 rounded-xl border-2 border-paper bg-(--header-sticker) px-3 py-2 text-[0.65rem] leading-tight text-(--header-sticker-ink) shadow-sticker md:border-3 md:px-4 md:py-3 md:text-xs",
      // The notched ends are a clip-path, which would also clip a filter on
      // the same element, so the ribbon's shadow sits on its wrapper.
      ribbon:
        "inline-flex h-8 -rotate-3 items-center bg-(--header-ribbon) px-5 text-[0.65rem] text-(--header-ribbon-ink) [clip-path:polygon(0_0,100%_0,calc(100%-12px)_50%,100%_100%,0_100%,12px_50%)] md:h-10 md:px-7 md:text-xs",
      plain: "text-xs text-(--header-accent)"
    }
  },
  defaultVariants: {
    style: "sticker"
  }
});

export default pageHeaderEyebrowVariants;
