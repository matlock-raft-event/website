import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 font-label leading-0! items-center justify-center uppercase rounded-none border border-transparent bg-clip-padding text-sm font-extrabold tracking-wider whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        solid: "shadow-[2px_2px_0_0_rgba(0,0,0,0.25)]",
        outline: "bg-transparent",
        ghost: "bg-transparent border-transparent",
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
        default: "h-9 gap-1.5 px-4 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-none px-2 text-sm has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-none px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-1.5 px-5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs": "size-6 rounded-none [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-none",
        "icon-lg": "size-10"
      }
    },
    compoundVariants: [
      // Solid
      {
        variant: "solid",
        color: "raft",
        class: "bg-raft text-raft-contrast hover:bg-raft-dark"
      },
      {
        variant: "solid",
        color: "pine",
        class: "bg-pine text-pine-contrast hover:bg-pine-dark"
      },
      {
        variant: "solid",
        color: "sun",
        class: "bg-sun text-sun-contrast hover:bg-sun-dark"
      },
      {
        variant: "solid",
        color: "river",
        class: "bg-river text-river-contrast hover:bg-river-dark"
      },
      {
        variant: "solid",
        color: "cream",
        class: "bg-cream text-cream-contrast hover:bg-cream-dark"
      },
      {
        variant: "solid",
        color: "ink",
        class: "bg-ink text-ink-contrast hover:bg-ink-dark"
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
