import type { Meta, StoryObj } from "@storybook/react";

import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    disabled: false
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true
  },
};
