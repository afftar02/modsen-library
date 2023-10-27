import React, { ChangeEvent, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PasswordInput from "./PasswordInput";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/PasswordInput",
  component: PasswordInput,
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

type PasswordInputStoryProps = {
  placeholder: string;
  color: string;
  isError: boolean;
};

const PasswordInputWithHooks = ({placeholder, isError, color}: PasswordInputStoryProps) => {
  const [value, setValue] = useState('');

  return (
    <PasswordInput
      placeholder={placeholder}
      onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
      value={value}
      isError={isError}
      color={color}
    />
  );
};

export const Primary: Story = {
  render: ({placeholder, isError, color}) =>
    <PasswordInputWithHooks
      placeholder={placeholder}
      isError={!!isError}
      color={color}
    />,
  args:{
    placeholder: 'Enter password',
    isError: false,
    color: '#000',
  }
};
