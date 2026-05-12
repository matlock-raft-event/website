import * as React from "react";
import type { VariantProps } from "class-variance-authority";

import toggleVariants from "./toggle-variants";

type ToggleGroupContextValue = VariantProps<typeof toggleVariants> & {
  spacing?: number;
  orientation?: "horizontal" | "vertical";
};

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  size: "default",
  variant: "default",
  spacing: 0,
  orientation: "horizontal",
});

export default ToggleGroupContext;
