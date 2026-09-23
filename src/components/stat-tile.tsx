type StatTileProps = {
  value: string | number;
  label: string;
  /** Degrees of tilt; keep within the design language's ±2.4° range. */
  tilt?: number;
};

/**
 * The stat tile from the design language: a tilted river-dark panel with an
 * Anton number in sun and a small caps label. Renders dd/dt so it can sit
 * inside a `<dl>`.
 */
const StatTile = ({ value, label, tilt = 0 }: StatTileProps) => (
  <div
    className="flex flex-col items-center justify-center rounded-[10px] border-[3px] border-cream/20 bg-river-dark px-7 py-5 text-center text-cream shadow-card"
    style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}
  >
    <dd className="font-display uppercase text-4xl sm:text-5xl leading-none text-sun">
      {value}
    </dd>
    <dt className="mt-2 label-caps text-xs">
      {label}
    </dt>
  </div>
);

export default StatTile;
