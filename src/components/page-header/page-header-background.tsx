export type PageHeaderPattern = "dots" | "stripes" | "wallpaper";

const WALLPAPER_LINE = "Matlock Raft Event • Boxing Day • River Derwent • ".repeat(3);
const WALLPAPER_ROWS = 14;

const PATTERN_CLASSES: Record<Exclude<PageHeaderPattern, "wallpaper">, string> = {
  dots: "bg-[radial-gradient(var(--header-pattern)_1.3px,transparent_1.8px)] [background-size:13px_13px]",
  stripes: "bg-[repeating-linear-gradient(90deg,transparent_0_36px,var(--header-stripe)_36px_72px)]"
};

/* The printed ground behind the title. Colours come from the header's
   surface, so this only decides the pattern. It clips itself, rather than
   the header clipping everything, so the wave can overlap the section
   below by its usual pixel. */
const PageHeaderBackground = ({ pattern }: { pattern: PageHeaderPattern }) => {
  if (pattern === "wallpaper") {
    return (
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -inset-x-[10%] -inset-y-[40%] flex -rotate-8 flex-col gap-1 font-display text-3xl leading-none uppercase whitespace-nowrap text-(--header-pattern) md:gap-1.5 md:text-[2.875rem]">
          {Array.from({ length: WALLPAPER_ROWS }, (_, row) => (
            <span key={row} className="even:-ml-40">
              {WALLPAPER_LINE}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return <div aria-hidden="true" className={`absolute inset-0 -z-10 ${PATTERN_CLASSES[pattern]}`} />;
};

export default PageHeaderBackground;
