import type { Meta, StoryObj } from "@storybook/react-vite";

import Waves from "~/components/waves";

const meta = {
  title: "Components/Waves",
  component: Waves,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Sections never meet in a straight line — every seam is a wave in the incoming section's colour. "
          + "Four curve variants; vary them so no two adjacent seams match."
      }
    }
  },
  args: {
    topColor: "var(--color-cream)",
    bottomColor: "var(--color-river)",
    variant: 2
  },
  argTypes: {
    variant: { control: "select", options: [1, 2, 3, 4] }
  }
} satisfies Meta<typeof Waves>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CreamToRiver: Story = {
  render: args => (
    <div>
      <div style={{ height: 60, background: "var(--color-cream)" }} />
      <Waves {...args} />
      <div style={{ height: 60, background: String(args.bottomColor) }} />
    </div>
  )
};

export const RiverToPine: Story = {
  ...CreamToRiver,
  args: { topColor: "var(--color-river)", bottomColor: "var(--color-pine)", variant: 3 }
};
