import type { Meta, StoryObj } from "@storybook/react-vite";

import Heading from "~/components/heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  args: {
    palette: "cream",
    subtitle: "Proud to present 2024's",
    title: "Heroic Winners"
  },
  argTypes: {
    palette: { control: "select", options: ["cream", "pine", "river"] }
  }
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnCream: Story = {};

export const OnPine: Story = {
  args: { palette: "pine" },
  globals: { backgrounds: { value: "pine" } }
};

export const OnRiver: Story = {
  args: { palette: "river", subtitle: "Keep ahead of the tide", title: "Latest Updates" },
  globals: { backgrounds: { value: "river" } }
};

export const TitleOnly: Story = {
  args: { subtitle: undefined }
};

export const LeftAligned: Story = {
  args: { align: "left", subtitle: "Travel & parking", title: "Getting Here" },
  parameters: {
    docs: {
      description: {
        story: "Decision 009: centred introduces a stage (card grids, podiums, CTAs); "
          + "left-aligned with an eyebrow introduces reading (running prose)."
      }
    }
  }
};

export const LeftOnDark: Story = {
  args: { align: "left", palette: "river", subtitle: "The race", title: "Three miles. One weir." },
  globals: { backgrounds: { value: "river" } }
};
