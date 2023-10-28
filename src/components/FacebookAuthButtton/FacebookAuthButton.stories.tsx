import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FacebookAuthButton from "./index";

const meta: Meta<typeof FacebookAuthButton> = {
  title: "Components/FacebookAuthButton",
  component: FacebookAuthButton,
};

export default meta;

type Story = StoryObj<typeof FacebookAuthButton>;

export const Primary: Story = {
  args: {
    authUrl: '',
    text: 'Log in with facebook'
  },
};
