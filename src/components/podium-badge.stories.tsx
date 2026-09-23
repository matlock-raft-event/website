import type { Meta, StoryObj } from "@storybook/react-vite";

import PodiumBadge from "~/components/podium-badge";

const meta = {
  title: "Components/PodiumBadge",
  component: PodiumBadge,
  args: { podium: 1 },
  argTypes: { podium: { control: "select", options: [1, 2, 3] } }
} satisfies Meta<typeof PodiumBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gold: Story = { render: () => <PodiumBadge podium={1} style={{ width: 80 }} /> };

export const AllMedals: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <PodiumBadge podium={1} style={{ width: 80 }} />
      <PodiumBadge podium={2} style={{ width: 80 }} />
      <PodiumBadge podium={3} style={{ width: 80 }} />
    </div>
  )
};
