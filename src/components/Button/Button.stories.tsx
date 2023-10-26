import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
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
