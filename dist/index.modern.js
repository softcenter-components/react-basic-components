import React, { forwardRef, createRef, useState } from 'react';
import styled from 'styled-components';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled.button(_templateObject());
var Button = function Button(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(StyledButton, null, text);
};

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 54px;\n  border: 1px solid #acacac;\n  padding: 2px;\n  border-radius: 10px;\n  cursor: text;\n  &.contains-searchbox,\n  &.error {\n    position: relative;\n  }\n  background: white;\n  display: grid;\n  ", "\n\n  ", "\n\n  svg {\n    width: 50%;\n    height: auto;\n    ", "\n    place-self: center center;\n  }\n\n  .icon-container {\n    display: grid;\n    width: 100%;\n    place-self: center;\n    place-content: center;\n  }\n\n  &.hoverable .icon-container {\n    cursor: pointer;\n  }\n\n  &.error {\n    border-width: 2px;\n    border-color: red;\n    svg {\n      fill: red;\n    }\n  }\n\n  input {\n    height: 100%;\n    width: 100%;\n    padding: 0px 15px;\n    outline: none;\n    border: none;\n    font-size: 16px;\n    color: #464646;\n    font-family: Montserrat;\n    background: white;\n    border-radius: 10px;\n    &::placeholder {\n      font-weight: 500;\n      font-family: Montserrat;\n      color: #959595;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  background: #0000;\n  position: absolute;\n  width: 100%;\n  height: 20px;\n  bottom: -25px;\n  font-size: 1.15rem;\n  color: red;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var FloatingMessage = styled.div(_templateObject$1());
var InputBody = styled.div(_templateObject2(), function (props) {
  return props.icon ? "\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 35px;\n  " : null;
}, function (props) {
  return props.isFocused ? "\n    box-shadow: 0 0 5px 0 #dddddd;\n  " : null;
}, function (props) {
  return props.svgStrokeMode ? "stroke: grey;" : 'fill: grey;';
});

var Input = forwardRef(function (_ref, ref) {
  var className = _ref.className,
      id = _ref.id,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      icon = _ref.icon,
      _ref$hasIcon = _ref.hasIcon,
      hasIcon = _ref$hasIcon === void 0 ? true : _ref$hasIcon,
      _onChange = _ref.onChange,
      _ref$onSvgClick = _ref.onSvgClick,
      onSvgClick = _ref$onSvgClick === void 0 ? undefined : _ref$onSvgClick,
      _ref$onFocus = _ref.onFocus,
      _onFocus = _ref$onFocus === void 0 ? undefined : _ref$onFocus,
      _ref$shouldStroke = _ref.shouldStroke,
      shouldStroke = _ref$shouldStroke === void 0 ? false : _ref$shouldStroke,
      containerRef = _ref.containerRef,
      error = _ref.error,
      errorMsg = _ref.errorMsg,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "id", "disabled", "placeholder", "icon", "hasIcon", "onChange", "onSvgClick", "onFocus", "shouldStroke", "containerRef", "error", "errorMsg"]);

  ref = !ref ? createRef() : ref;

  var _useState = useState(false),
      isFocused = _useState[0],
      setIsFocused = _useState[1];

  return /*#__PURE__*/React.createElement(InputBody, {
    shouldStroke: shouldStroke,
    ref: containerRef,
    id: id,
    className: className + " " + (error ? 'error' : ''),
    icon: hasIcon && icon,
    isFocused: isFocused,
    onClick: function onClick() {
      return ref.current.focus();
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, props, {
    onChange: function onChange(e) {
      if (_onChange) _onChange(e);
    },
    onFocus: function onFocus(e) {
      setIsFocused(true);
      if (_onFocus) _onFocus(e);
    },
    onBlur: function onBlur() {
      setIsFocused(false);
    },
    disabled: disabled,
    placeholder: placeholder,
    ref: ref
  })), icon && hasIcon ? /*#__PURE__*/React.createElement("div", {
    onClick: onSvgClick,
    className: "icon-container"
  }, icon) : null, error && errorMsg && /*#__PURE__*/React.createElement(FloatingMessage, null, "* ", errorMsg));
});

export { Button };
//# sourceMappingURL=index.modern.js.map
