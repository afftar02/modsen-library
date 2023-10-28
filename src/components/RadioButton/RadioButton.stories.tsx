import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./index";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

type RadioButtonStoryProps = {
  checkedColor: string;
  buttonBgColor: string;
  textColor: string;
};

const RadioButtonWithHooks = ({ buttonBgColor, textColor, checkedColor }: RadioButtonStoryProps) => {
  const [value, setValue] = useState('first');

  return (
    ['first', 'second'].map((item, index) => (
      <RadioButton
        key={index}
        id={item}
        name={'value'}
        value={item}
        text={item}
        checked={value === item}
        checkedColor={checkedColor}
        buttonBgColor={buttonBgColor}
        textColor={textColor}
        onClick={() => setValue(item)}
      />
    ))
  );
};

export const Primary: Story = {
  render: ({buttonBgColor, textColor, checkedColor}) =>
    <RadioButtonWithHooks
      checkedColor={checkedColor}
      buttonBgColor={buttonBgColor}
      textColor={textColor}
    />,
  args:{
    checkedColor: '#d98639',
    buttonBgColor: '#000',
    textColor: '#000'
  }
};
