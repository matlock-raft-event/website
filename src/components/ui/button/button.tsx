import type { AnchorHTMLAttributes } from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

import buttonVariants from "./button-variants";

type CommonProps = VariantProps<typeof buttonVariants> & { className?: string };

type ButtonAsButton =
  & CommonProps
  & Omit<ButtonPrimitive.Props, "color">
  & { href?: undefined };

type ButtonAsLink =
  & CommonProps
  & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color">
  & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

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

export default Button;
