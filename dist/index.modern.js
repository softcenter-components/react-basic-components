import React from 'react';
import styled from 'styled-components';

let _ = t => t,
    _t;
const StyledButton = styled.button(_t || (_t = _`
  color: red;
`));
const Button = ({
  text
}) => {
  return /*#__PURE__*/React.createElement(StyledButton, null, text);
};

export { Button };
//# sourceMappingURL=index.modern.js.map
