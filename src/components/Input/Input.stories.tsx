import React, { ChangeEvent, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

const InputWithHooks = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      iconId={'email'}
      placeholder={'Enter email'}
      onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
      value={value}
      isError={false}
      color={'#000'}
    />
  );
};

export const Primary: Story = {
  render: () => <InputWithHooks />,
};
