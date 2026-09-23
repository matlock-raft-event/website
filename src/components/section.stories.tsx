import type { Meta, StoryObj } from "@storybook/react-vite";

import Heading from "~/components/heading";
import Section from "~/components/section";

const meta = {
  title: "Components/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A section takes the same colours as the page header, so an inner page can be one ground from the "
          + "header down to the closing (decision 014). Cream is the reading surface and keeps ink text; the "
          + "greens and the river carry cream text; sun and raft are for short, loud pages. Each ground brings "
          + "its own shadow shapes (trees on the greens, clouds on cream, water on river), which `plain` drops "
          + "for sections carrying photographs."
      }
    }
  },
  argTypes: {
    color: { control: "select", options: ["cream", "river", "pine", "pine-dark", "raft", "sun"] }
  }
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cream: Story = {
  args: { color: "cream" },
  render: args => (
    <Section {...args}>
      <Heading palette={args.color} subtitle="It's for a mighty good cause" title="Get Involved" />
      <p className="mx-auto max-w-2xl text-center">
        Brave the water, marshal the banks, shake a bucket or back the event.
      </p>
    </Section>
  )
};

export const River: Story = {
  ...Cream,
  args: { color: "river" }
};

export const Pine: Story = {
  ...Cream,
  args: { color: "pine" }
};

export const PineDark: Story = {
  ...Cream,
  args: { color: "pine-dark" }
};

/** No shapes, for a section that carries photographs. */
export const Plain: Story = {
  ...Cream,
  args: { color: "river", plain: true }
};
