import type { Theme } from "@mui/material/styles";

import Button from "./Button";
import Link from "./Link";
import ToggleButton from "./ToggleButton";
import Typography from "./Typography";

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Link(theme),
    ToggleButton(theme),
    Typography(theme)
  );
}
