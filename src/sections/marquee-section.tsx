import RnliFundraiseImg from "~/assets/images/rnlifundraise.png";

const resolveSrc = (asset: unknown): string =>
  (asset as { src?: string }).src ?? (asset as unknown as string);

const ITEMS_PER_GROUP = 6;

const MarqueeGroup = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <div aria-hidden={ariaHidden} className="flex items-center shrink-0">
    {
      Array.from({ length: ITEMS_PER_GROUP })
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className="flex items-center gap-8 px-4 shrink-0">
            <span className="text-cream font-display py-2 text-lg uppercase tracking-wide whitespace-nowrap">
              Fundraising for the RNLI since 1961
            </span>
            <img alt="" className="h-12 py-1 w-auto shrink-0" src={resolveSrc(RnliFundraiseImg)} />
          </div>
        ))
    }
  </div>
);

const MarqueeSection = () => (
  <div className="bg-green overflow-hidden">
    <div className="flex animate-[marquee_30s_linear_infinite] motion-reduce:animate-none">
      <MarqueeGroup />
      <MarqueeGroup ariaHidden />
    </div>
  </div>
);

export default MarqueeSection;
