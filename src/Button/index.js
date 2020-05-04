import React from 'react';

import { StyledButton } from './styles';

export const Button = ({ text }) => {
  return (
    <StyledButton
      onPress={() => false}
    >
      {text} 
    </StyledButton>
  );
};
