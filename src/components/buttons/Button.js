import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ buttonText, handleClick, buttonType, disabled, type }) => {
  return (
    <StyledButton
      onClick={handleClick}
      buttonType={buttonType}
      disabled={disabled}
      type={type}>
      {buttonText}
    </StyledButton>
  );
};

export default Button;