import type { Meta, StoryObj } from "@storybook/react";

import Seat from "./index";

const meta: Meta<typeof Seat> = {
  title: "UI/Seat",
  component: Seat,
};

export default meta;

type Story = StoryObj<typeof Seat>;

export const Primary: Story = {
  args: {
    reserved: false,
  },
};
