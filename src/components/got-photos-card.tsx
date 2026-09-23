import { CameraIcon } from "@phosphor-icons/react";

import { Button } from "~/components/ui/button";

/* Paper carries its own ink: the card sits on whatever ground the page is,
   and the section's text colour would otherwise follow it in.

   The gallery is other people's photos, so every gallery page ends by asking
   for more of them. Paper card, one sticker-ish icon, one way to send them. */
const GotPhotosCard = () => (
  <div className="mt-10 flex flex-wrap items-center gap-5 rounded-[10px] bg-paper px-6 py-5 text-ink shadow-card">
    <span className="grid size-12 shrink-0 place-items-center rounded-full border-[3px] border-paper bg-sun text-ink shadow-sticker">
      <CameraIcon aria-hidden="true" size={22} weight="bold" />
    </span>
    <div className="min-w-[16rem] flex-1">
      <h2 className="font-display uppercase text-2xl text-pine-dark">
        Got photos?
      </h2>
      <p className="mt-0.5 text-sm sm:text-base leading-relaxed">
        Message them to us on Facebook, or post them in the group, and they could end up here.
      </p>
    </div>
    <Button color="sun" href="https://www.facebook.com/matlockraftevent/">
      Send us yours
    </Button>
  </div>
);

export default GotPhotosCard;
