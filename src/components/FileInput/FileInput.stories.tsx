import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FileInput from "./FileInput";

const meta: Meta<typeof FileInput> = {
  title: "Components/FileInput",
  component: FileInput,
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Primary: Story = {
  args: {
    uploadText: 'Upload file:',
    uploadedText: 'Uploaded file:',
    borderColor: '#000',
    textColor: '#000',
    uploadedButtonBgColor: '#000',
    uploadedButtonColor: '#fff'
  },
};
