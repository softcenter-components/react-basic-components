import React from 'react';
import styled from 'styled-components';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: #fff;\n  background: #0072bc;\n  width: 165px;\n  height: 45px;\n  font-size: 15px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600;\n  border-radius: 10px;\n  :hover {\n    cursor: pointer;  \n  }\n  :active {\n    background: #0009;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled.button(_templateObject());

var Button = function Button(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(StyledButton, {
    onPress: function onPress() {
      return false;
    }
  }, text);
};

export { Button };
//# sourceMappingURL=index.modern.js.map
