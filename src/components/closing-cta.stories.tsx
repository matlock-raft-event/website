import type { Meta, StoryObj } from "@storybook/react-vite";

import ClosingCta from "~/components/closing-cta";

const meta = {
  title: "Components/ClosingCta",
  component: ClosingCta,
  parameters: { layout: "fullscreen" },
  args: {
    title: "Ready to get involved?",
    text: "Got the info you need? Be part of Matlock's favourite Boxing Day tradition.",
    primary: { label: "Take part", href: "/take-part" },
    secondary: { label: "Donate", href: "/donate" }
  }
} satisfies Meta<typeof ClosingCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryOnly: Story = {
  args: { secondary: undefined }
};

export const WithAccent: Story = {
  args: {
    title: "See you on",
    titleAccent: "the riverbank",
    text: "Do it once and we promise you'll be hooked.",
    primary: { label: "Enter a raft", href: "/take-part" },
    secondary: { label: "Donate to the RNLI", href: "/donate" }
  }
};
