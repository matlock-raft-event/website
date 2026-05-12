import type { AnchorHTMLAttributes } from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 font-serif leading-0! items-center justify-center uppercase rounded-none border border-transparent bg-clip-padding text-base font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        solid: "shadow-[2px_2px_0_0_rgba(0,0,0,0.25)]",
        outline: "bg-transparent",
        ghost: "bg-transparent border-transparent",
        link: "bg-transparent border-transparent underline-offset-4 hover:underline"
      },
      color: {
        red: "",
        green: "",
        yellow: "",
        mint: "",
        cream: "",
        dark: ""
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
        color: "red",
        class: "bg-red text-red-contrast hover:bg-red-dark"
      },
      {
        variant: "solid",
        color: "green",
        class: "bg-green text-green-contrast hover:bg-green-dark"
      },
      {
        variant: "solid",
        color: "yellow",
        class: "bg-yellow text-yellow-contrast hover:bg-yellow-dark"
      },
      {
        variant: "solid",
        color: "mint",
        class: "bg-primary text-primary-contrast hover:bg-primary-dark"
      },
      {
        variant: "solid",
        color: "cream",
        class: "bg-secondary text-secondary-contrast hover:bg-secondary-dark"
      },
      {
        variant: "solid",
        color: "dark",
        class: "bg-dark text-dark-contrast hover:bg-dark-dark"
      },

      // Outline
      {
        variant: "outline",
        color: "red",
        class: "border-red text-red hover:bg-red hover:text-red-contrast"
      },
      {
        variant: "outline",
        color: "green",
        class: "border-green text-green hover:bg-green hover:text-green-contrast"
      },
      {
        variant: "outline",
        color: "yellow",
        class: "border-yellow text-yellow-contrast hover:bg-yellow hover:text-yellow-contrast"
      },
      {
        variant: "outline",
        color: "mint",
        class: "border-primary text-primary-contrast hover:bg-primary"
      },
      {
        variant: "outline",
        color: "cream",
        class: "border-secondary-dark text-secondary-contrast hover:bg-secondary"
      },
      {
        variant: "outline",
        color: "dark",
        class: "border-dark text-dark hover:bg-dark hover:text-dark-contrast"
      },

      // Ghost
      {
        variant: "ghost",
        color: "red",
        class: "text-red hover:bg-red/10"
      },
      {
        variant: "ghost",
        color: "green",
        class: "text-green hover:bg-green/10"
      },
      {
        variant: "ghost",
        color: "yellow",
        class: "text-yellow-contrast hover:bg-yellow/20"
      },
      {
        variant: "ghost",
        color: "mint",
        class: "text-primary-contrast hover:bg-primary/30"
      },
      {
        variant: "ghost",
        color: "cream",
        class: "text-secondary-contrast hover:bg-secondary"
      },
      {
        variant: "ghost",
        color: "dark",
        class: "text-dark hover:bg-dark/10"
      },

      // Link
      {
        variant: "link",
        color: "red",
        class: "text-red"
      },
      {
        variant: "link",
        color: "green",
        class: "text-green"
      },
      {
        variant: "link",
        color: "yellow",
        class: "text-yellow-contrast"
      },
      {
        variant: "link",
        color: "mint",
        class: "text-primary-contrast"
      },
      {
        variant: "link",
        color: "cream",
        class: "text-secondary-contrast"
      },
      {
        variant: "link",
        color: "dark",
        class: "text-dark"
      }
    ],
    defaultVariants: {
      variant: "solid",
      color: "red",
      size: "default"
    }
  }
);

type CommonProps = VariantProps<typeof buttonVariants> & { className?: string };

type ButtonAsButton =
  & CommonProps
  & Omit<ButtonPrimitive.Props, "color">
  & { href?: undefined };

type ButtonAsLink =
  & CommonProps
  & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color">
  & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = ({
  className,
  variant,
  color,
  size,
  ...props
}: ButtonProps) => {
  const classes = cn(buttonVariants({
    variant,
    color,
    size,
    className
  }));

  if ("href" in props && props.href !== undefined) {
    const { children, ...rest } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        className={classes}
        data-slot="button"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <ButtonPrimitive
      className={classes}
      data-slot="button"
      {...(props as ButtonPrimitive.Props)}
    />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
