import { CalendarBlankIcon, ClockIcon, EyeIcon, MapPinAreaIcon, UsersThreeIcon } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

/** The key event facts, in display order. The hero shows the first four;
    spectator contexts show all five. Change a fact here, it changes
    everywhere. */
export const EVENT_FACTS: { icon: Icon; label: string }[] = [
  { icon: MapPinAreaIcon, label: "Matlock, Derbyshire" },
  { icon: CalendarBlankIcon, label: "Boxing Day, 26 Dec" },
  { icon: ClockIcon, label: "11am start" },
  { icon: EyeIcon, label: "Free to watch" },
  { icon: UsersThreeIcon, label: "Family friendly" }
];
