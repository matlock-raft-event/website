import type { Meta, StoryObj } from "@storybook/react-vite";

import StoryRow from "~/components/story-row";

/* A real photo from the Studio's gallery. */
const photo = { _type: "image", asset: { _type: "reference", _ref: "image-2fe6ab86f39bb4477370145aab7de98c99e2040c-930x1200-jpg" } };

const Text = () => (
  <>
    <h3 className="pb-3 font-display uppercase text-2xl sm:text-3xl lg:text-4xl leading-tight">Picture the scene</h3>
    <p className="text-base md:text-lg leading-relaxed">
      Boxing Day morning, 11am. Rafts of every shape, theme and costume set off from Matlock, float through Matlock
      Bath, drop over Masson Weir and finish at Cromford Meadows. It's free to watch.
    </p>
  </>
);

const meta = {
  title: "Components/StoryRow",
  component: StoryRow,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "One beat of the story page: a tilted polaroid beside the text. `flip` puts the photo on the right "
          + "at desktop widths and swaps the tilt; stacked, the photo is always on top. Without a `photo` it is just the text."
      }
    }
  },
  args: {
    photo,
    alt: "A crew on a homemade raft in 2015",
    caption: "Matlock, 2015",
    children: <Text />
  },
  decorators: [
    Story => (
      <div className="bg-river px-4 py-12 text-river-contrast">
        <div className="mx-auto w-full max-w-5xl">
          <Story />
        </div>
      </div>
    )
  ]
} satisfies Meta<typeof StoryRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PhotoLeft: Story = {};

export const PhotoRight: Story = {
  args: { flip: true }
};

export const NoCaption: Story = {
  args: { caption: undefined }
};

export const TextOnly: Story = {
  args: { photo: undefined }
};
