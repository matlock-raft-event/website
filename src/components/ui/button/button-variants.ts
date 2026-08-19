import { cva } from "class-variance-authority";

/* The design-language button: a chunky pill that presses like a real thing.
   Solid buttons carry a hard underside shadow (--btn-under, the colour's own
   dark shade) that compresses on press. Colour says what it does: raft acts,
   sun donates, cream navigates on dark surfaces. Outline exists for filter
   chips; ghost/link for nav-like actions. */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 font-label leading-0! items-center justify-center uppercase rounded-full border border-transparent bg-clip-padding text-sm font-extrabold tracking-wider whitespace-nowrap transition-[transform,box-shadow,filter,background-color,color] duration-150 ease-out outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        solid: "shadow-[0_3px_0_0_var(--btn-under),0_5px_8px_rgba(8,64,44,0.12)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_4px_0_0_var(--btn-under),0_7px_10px_rgba(8,64,44,0.14)] active:translate-y-[2px] active:shadow-[0_1px_0_0_var(--btn-under)]",
        outline: "bg-transparent active:translate-y-px",
        ghost: "bg-transparent border-transparent active:translate-y-px",
        link: "bg-transparent border-transparent underline-offset-4 hover:underline"
      },
      color: {
        raft: "",
        pine: "",
        sun: "",
        river: "",
        cream: "",
        ink: ""
      },
      size: {
        default: "h-11 gap-1.5 px-7 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "h-7 gap-1 px-3 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1 px-4 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-1.5 px-8 has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        icon: "size-11",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-12"
      }
    },
    compoundVariants: [
      // Solid — bg + contrast text + the colour's own dark shade underneath
      {
        variant: "solid",
        color: "raft",
        class: "bg-raft text-raft-contrast [--btn-under:var(--color-raft-dark)]"
      },
      {
        variant: "solid",
        color: "pine",
        class: "bg-pine text-pine-contrast [--btn-under:var(--color-pine-dark)]"
      },
      {
        variant: "solid",
        color: "sun",
        class: "bg-sun text-sun-contrast [--btn-under:var(--color-sun-dark)] focus-visible:outline-ink"
      },
      {
        variant: "solid",
        color: "river",
        class: "bg-river text-river-contrast [--btn-under:var(--color-river-dark)]"
      },
      {
        variant: "solid",
        color: "cream",
        class: "bg-cream text-cream-contrast [--btn-under:#c9c3a5]"
      },
      {
        variant: "solid",
        color: "ink",
        class: "bg-ink text-ink-contrast [--btn-under:var(--color-ink-dark)]"
      },

      // Outline
      {
        variant: "outline",
        color: "raft",
        class: "border-raft text-raft hover:bg-raft hover:text-raft-contrast"
      },
      {
        variant: "outline",
        color: "pine",
        class: "border-pine text-pine hover:bg-pine hover:text-pine-contrast"
      },
      {
        variant: "outline",
        color: "sun",
        class: "border-sun text-sun-contrast hover:bg-sun hover:text-sun-contrast"
      },
      {
        variant: "outline",
        color: "river",
        class: "border-river text-river-contrast hover:bg-river"
      },
      {
        variant: "outline",
        color: "cream",
        class: "border-cream-dark text-cream-contrast hover:bg-cream"
      },
      {
        variant: "outline",
        color: "ink",
        class: "border-ink text-ink hover:bg-ink hover:text-ink-contrast"
      },

      // Ghost
      {
        variant: "ghost",
        color: "raft",
        class: "text-raft hover:bg-raft/10"
      },
      {
        variant: "ghost",
        color: "pine",
        class: "text-pine hover:bg-pine/10"
      },
      {
        variant: "ghost",
        color: "sun",
        class: "text-sun-contrast hover:bg-sun/20"
      },
      {
        variant: "ghost",
        color: "river",
        class: "text-river-contrast hover:bg-river/30"
      },
      {
        variant: "ghost",
        color: "cream",
        class: "text-cream-contrast hover:bg-cream"
      },
      {
        variant: "ghost",
        color: "ink",
        class: "text-ink hover:bg-ink/10"
      },

      // Link
      {
        variant: "link",
        color: "raft",
        class: "text-raft"
      },
      {
        variant: "link",
        color: "pine",
        class: "text-pine"
      },
      {
        variant: "link",
        color: "sun",
        class: "text-sun"
      },
      {
        variant: "link",
        color: "river",
        class: "text-river"
      },
      {
        variant: "link",
        color: "cream",
        class: "text-cream"
      },
      {
        variant: "link",
        color: "ink",
        class: "text-ink"
      }
    ],
    defaultVariants: {
      variant: "solid",
      color: "raft",
      size: "default"
    }
  }
);

export default buttonVariants;
