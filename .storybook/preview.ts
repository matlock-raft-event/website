import type { Preview } from "@storybook/react-vite";

import "../src/styles/global.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      options: {
        cream: { name: "Cream", value: "#f6f3e2" },
        paper: { name: "Paper", value: "#fffdf4" },
        pine: { name: "Pine", value: "#0d5c3f" },
        river: { name: "River", value: "#1d6a72" },
        ink: { name: "Ink", value: "#26302c" }
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  initialGlobals: {
    backgrounds: { value: "cream" }
  }
};

export default preview;
