"use client";

import * as React from "react";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import type { VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

import ToggleGroupContext from "./toggle-group-context";
import toggleVariants from "./toggle-variants";

const ToggleGroup = ({
  className,
  variant,
  size,
  spacing = 0,
  orientation = "horizontal",
  children,
  ...props
}: ToggleGroupPrimitive.Props &
  VariantProps<typeof toggleVariants> & {
    spacing?: number;
    orientation?: "horizontal" | "vertical";
  }) => (
  <ToggleGroupPrimitive
    data-slot="toggle-group"
    data-variant={variant}
    data-size={size}
    data-spacing={spacing}
    data-orientation={orientation}
    style={{ "--gap": spacing } as React.CSSProperties}
    className={cn(
      "group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-none data-[size=sm]:rounded-none data-vertical:flex-col data-vertical:items-stretch",
      className
    )}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size, spacing, orientation }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive>
);

export default ToggleGroup;
