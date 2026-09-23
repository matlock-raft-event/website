import type { Meta, StoryObj } from "@storybook/react-vite";

import StatTile from "~/components/stat-tile";

const meta = {
  title: "Components/StatTile",
  component: StatTile,
  args: { value: "63", label: "Years of racing", tilt: -1.4 },
  parameters: {
    docs: {
      description: {
        component:
          "The stat tile from the design language: a tilted river-dark panel with an Anton "
          + "number in sun. Keep tilts within ±2.4° and alternate directions across a row."
      }
    }
  }
} satisfies Meta<typeof StatTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {};

export const Row: Story = {
  render: () => (
    <dl className="flex flex-wrap justify-center gap-8">
      <StatTile label="Years" tilt={-1.4} value="63" />
      <StatTile label="Raised for the RNLI" tilt={1.6} value="£250k+" />
      <StatTile label="Events" tilt={-1.8} value="60" />
    </dl>
  )
};
