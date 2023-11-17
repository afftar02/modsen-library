import React from "react";
import { RadioButtonProps } from "./types";
import { ItemLabel, ItemValue, RadioInput } from "./styled";

function RadioButton({
  id,
  name,
  value,
  text,
  onClick,
  checkedColor,
  buttonBgColor,
  textColor,
  checked = false,
}: RadioButtonProps) {
  return (
    <ItemValue>
      <RadioInput
        id={id}
        name={name}
        value={value}
        type={'radio'}
        checked={checked}
        onChange={onClick}
        $bgColor={buttonBgColor}
        $checkedColor={checkedColor}
      />
      <ItemLabel htmlFor={id} onClick={onClick} $color={textColor}>
        {text}
      </ItemLabel>
    </ItemValue>
  );
}

export default RadioButton;
