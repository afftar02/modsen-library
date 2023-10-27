import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { styled } from 'styled-components';
import Input from "../Input/Input";
import { checkPasswordComplexity } from '../../helpers/CheckPasswordComplexity';

type PasswordInputProps = {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  color: string;
  isError?: boolean;
  onClick?: MouseEventHandler<HTMLInputElement>;
  withIcon?: boolean;
};

const StrengthBar = styled.div`
  width: 0;
  height: 5px;
  transition: all 1s ease-in-out;

  &[data-complexity='None'] {
    width: 0;
  }
  &[data-complexity='Low'] {
    width: 33%;
    background: red;
  }
  &[data-complexity='Medium'] {
    width: 66%;
    background: orange;
  }
  &[data-complexity='High'] {
    width: 100%;
    background: green;
  }
`;

const ComplexityLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ComplexityLabel = styled.span`
  transition: all 1s ease-in-out;

  &[data-complexity='None'] {
    color: transparent;
  }
  &[data-complexity='Low'] {
    color: red;
  }
  &[data-complexity='Medium'] {
    color: orange;
  }
  &[data-complexity='High'] {
    color: green;
  }
`;

function PasswordInput({
  placeholder,
  onChange,
  value,
  isError,
  onClick,
  color,
  withIcon = true,
}: PasswordInputProps) {
  const [complexity, setComplexity] = useState('None');

  useEffect(() => {
    setComplexity(checkPasswordComplexity(value));
  }, [value, complexity]);

  return (
    <div>
      <Input
        iconId={withIcon ? 'password' : ''}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={'password'}
        name={'password'}
        isError={isError}
        onClick={onClick}
        color={color}
      />
      <StrengthBar data-complexity={complexity} />
      <ComplexityLabelContainer>
        <ComplexityLabel data-complexity={complexity}>
          {complexity}
        </ComplexityLabel>
      </ComplexityLabelContainer>
    </div>
  );
}

export default PasswordInput;
