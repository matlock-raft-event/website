import Reveal from "~/components/reveal";
import { Button } from "~/components/ui/button";

/* The homepage closing, on the pine-dark page frame: one last warm push
   before the footer. Flows straight into the footer's bunting. */
const RiverbankSection = () => (
  <div className="bg-pine-dark text-cream">
    <div className="mx-auto w-full container px-4 py-20 sm:py-24 text-center">
      <Reveal className="flex flex-col items-center gap-5">
        <p className="font-label text-xs font-extrabold uppercase tracking-[0.2em] text-sun">
          Boxing Day &middot; 11am &middot; Free to watch
        </p>
        <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.97]">
          See you on
          {" "}
          <span className="text-sun">the riverbank</span>
        </h2>
        <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-cream/90">
          Do it once and we promise you&apos;ll be hooked. Build a raft, bring the
          family, and help Matlock raise a fortune for the lifeboats.
        </p>
        <div className="mt-2 flex flex-row flex-wrap justify-center gap-4">
          <Button href="/take-part" size="lg">Enter a raft</Button>
          <Button color="sun" href="/donate" size="lg">Donate to the RNLI</Button>
        </div>
      </Reveal>
    </div>
  </div>
);

export default RiverbankSection;
