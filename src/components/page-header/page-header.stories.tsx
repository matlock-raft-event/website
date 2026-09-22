import type { Meta, StoryObj } from "@storybook/react-vite";

import { PageHeader } from "~/components/page-header";
import type { PageHeaderColor } from "~/components/page-header";

const COLORS: PageHeaderColor[] = ["river", "pine", "pine-dark", "raft", "sun"];

const meta = {
  title: "Components/PageHeader",
  component: PageHeader,
  args: {
    title: "Take part",
    eyebrow: "So you're brave enough?",
    color: "river",
    background: "dots",
    eyebrowStyle: "sticker",
    contentWidth: "wide"
  },
  argTypes: {
    color: { control: "select", options: COLORS },
    background: { control: "inline-radio", options: ["dots", "stripes", "wallpaper"] },
    eyebrowStyle: { control: "inline-radio", options: ["sticker", "ribbon", "plain"] },
    contentWidth: { control: "inline-radio", options: ["wide", "text"] }
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The inner-page masthead: a printed, patterned ground with a huge title in a hard shadow "
          + "and a stuck-on eyebrow. `color` sets the ground and every colour on it; `background` picks "
          + "the pattern; `eyebrowStyle` picks sticker, ribbon or plain. Use plain on pages that "
          + "shouldn't be playful. The title steps down in size as it gets longer."
      }
    }
  }
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dots: Story = {};

export const Stripes: Story = {
  args: { color: "sun", background: "stripes" }
};

export const Wallpaper: Story = {
  args: { color: "pine-dark", background: "wallpaper", eyebrowStyle: "ribbon" }
};

export const LongTitle: Story = {
  args: {
    title: "Thanks to the Environment Agency",
    eyebrow: "16 December 2024",
    color: "pine",
    contentWidth: "text"
  }
};

export const Plain: Story = {
  args: {
    title: "Remembering Ian Ryde",
    eyebrow: "1 October 2024",
    color: "pine-dark",
    eyebrowStyle: "plain",
    contentWidth: "text"
  }
};

export const AllColours: Story = {
  render: args => (
    <div className="flex flex-col">
      {COLORS.map(color => <PageHeader key={color} {...args} color={color} eyebrow={color} />)}
    </div>
  )
};
