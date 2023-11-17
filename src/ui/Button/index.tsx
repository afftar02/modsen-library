import React from 'react';
import { ButtonProps } from "./types";
import { StyledButton } from "./styled";

function Button({
  children,
  type,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} $disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
