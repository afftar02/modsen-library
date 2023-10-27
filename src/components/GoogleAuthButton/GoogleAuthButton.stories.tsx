import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import GoogleAuthButton from "./GoogleAuthButton";

const meta: Meta<typeof GoogleAuthButton> = {
  title: "Components/GoogleAuthButton",
  component: GoogleAuthButton,
};

export default meta;

type Story = StoryObj<typeof GoogleAuthButton>;

export const Primary: Story = {
  args: {
    authUrl: '',
    text: 'Log in with Google',
    borderColor: '#000'
  },
};
