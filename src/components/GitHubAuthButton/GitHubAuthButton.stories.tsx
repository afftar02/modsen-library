import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import GitHubAuthButton from "./GitHubAuthButton";

const meta: Meta<typeof GitHubAuthButton> = {
  title: "Components/GitHubAuthButton",
  component: GitHubAuthButton,
};

export default meta;

type Story = StoryObj<typeof GitHubAuthButton>;

export const Primary: Story = {
  args: {
    authUrl: '',
    text: 'Log in with gitHub'
  },
};
