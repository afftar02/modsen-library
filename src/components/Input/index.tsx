import { styled } from 'styled-components';
import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import Icon from "../Icon";

type InputProps = {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  color: string;
  iconId?: string;
  type?: string;
  name?: string;
  isError?: boolean;
  onClick?: MouseEventHandler<HTMLInputElement>;
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input<{ $isError?: boolean; $color: string }>`
  color: ${(props) => props.$color};
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 300;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: solid 2px #d9d9d9;
  width: 100%;
  transition: all 0.1s ease-in-out;

  &::placeholder {
    color: ${(props) => props.$color};
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 300;
    transition: color 0.1s ease-in-out;
  }

  ${(props) =>
    props.$isError &&
    `
    &::placeholder {
      color: red;
    }
    border-color: red;
    color: red;
  `};
`;

const StyledIcon = styled(Icon)`
  margin-right: 30px;
`;

function Input({
  iconId,
  placeholder,
  onChange,
  value,
  type,
  name,
  isError,
  onClick,
  color,
}: InputProps) {
  return (
    <InputContainer>
      {iconId && (
        <StyledIcon id={iconId} width={64} height={64} viewBox="0 0 64 64" />
      )}
      <StyledInput
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        onClick={onClick}
        $isError={isError}
        $color={color}
      />
    </InputContainer>
  );
}

export default Input;
