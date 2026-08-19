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
          "The page is built from three section surfaces — **cream**, **river** and **pine** — with pine-dark "
          + "reserved for the page frame (header, closing, footer). Each palette brings its own decorative "
          + "shadow shapes (trees on pine, clouds on cream, water on river)."
      }
    }
  },
  argTypes: {
    palette: { control: "select", options: ["cream", "river", "pine", "sun", "raft", "ink"] }
  }
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cream: Story = {
  args: { palette: "cream" },
  render: args => (
    <Section {...args}>
      <Heading palette={args.palette} subtitle="It's for a mighty good cause" title="Get Involved" />
      <p className="mx-auto max-w-2xl text-center">
        Brave the water, marshal the banks, shake a bucket or back the event.
      </p>
    </Section>
  )
};

export const River: Story = {
  ...Cream,
  args: { palette: "river" }
};

export const Pine: Story = {
  ...Cream,
  args: { palette: "pine" }
};
