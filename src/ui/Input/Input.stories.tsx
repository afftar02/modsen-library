import React, { ChangeEvent, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

type InputStoryProps = {
  placeholder: string;
  color: string;
  iconId: string;
  isError: boolean;
};

const InputWithHooks = ({iconId, placeholder, isError, color}: InputStoryProps) => {
  const [value, setValue] = useState('');

  return (
    <Input
      iconId={iconId}
      placeholder={placeholder}
      onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
      value={value}
      isError={isError}
      color={color}
    />
  );
};

export const Primary: Story = {
  render: ({iconId, placeholder, isError, color}) =>
    <InputWithHooks
      iconId={iconId ?? 'email'}
      placeholder={placeholder}
      isError={!!isError}
      color={color}
    />,
  args:{
    iconId: 'email',
    placeholder: 'Enter email',
    isError: false,
    color: '#000',
  }
};
