import type { Meta, StoryObj } from "@storybook/react";
import GoogleAuthButton from "./index";

const meta: Meta<typeof GoogleAuthButton> = {
  title: "UI/GoogleAuthButton",
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
