import type { Meta, StoryObj } from "@storybook/react";
import VideoPlayer from "./index";

const meta: Meta<typeof VideoPlayer> = {
  title: "UI/VideoPlayer",
  component: VideoPlayer,
};

export default meta;

type Story = StoryObj<typeof VideoPlayer>;

export const Primary: Story = {
  args: {
    src: 'https://www.film.ru/sites/default/files/trailers/49816692/Oppenheimer___New_Trailer.mp4'
  },
};
