import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "~/components/ui/button";

const COLORS = ["raft", "pine", "sun", "river", "cream", "ink"] as const;

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Enter a raft",
    variant: "solid",
    color: "raft",
    size: "default"
  },
  argTypes: {
    variant: { control: "select", options: ["solid", "outline", "ghost", "link"] },
    color: { control: "select", options: [...COLORS] },
    size: { control: "select", options: ["xs", "sm", "default", "lg"] }
  },
  parameters: {
    docs: {
      description: {
        component:
          "The action component. Colour carries meaning: **raft red acts** (one per screen region), "
          + "**sun donates**, **cream navigates on dark surfaces**. Max two buttons side by side."
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Colours: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      {COLORS.map(color => (
        <Button key={color} color={color}>{color}</Button>
      ))}
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button color="raft" variant="solid">Solid</Button>
      <Button color="raft" variant="outline">Outline</Button>
      <Button color="raft" variant="ghost">Ghost</Button>
      <Button color="raft" variant="link">Link</Button>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button color="raft" size="xs">Extra small</Button>
      <Button color="raft" size="sm">Small</Button>
      <Button color="raft" size="default">Default</Button>
      <Button color="raft" size="lg">Large</Button>
    </div>
  )
};

export const AsLink: Story = {
  args: { href: "/take-part", children: "Enter a raft" }
};

export const OnDarkSurface: Story = {
  globals: { backgrounds: { value: "pine" } },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button color="raft">Enter a raft</Button>
      <Button color="sun">Donate</Button>
      <Button color="cream">Watch the race</Button>
    </div>
  )
};
