function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));

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
  var data = _taggedTemplateLiteralLoose(["\n  color: #fff;\n  background: #0072bc;\n  height: 100%;\n  width: 100%;\n  font-size: ", ";\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600;\n  border-radius: 10px;\n  border: 1px solid #0072bc;\n  outline: none;\n  box-sizing: border-box;\n  padding: 6% 2%;\n\n  &:active {\n    background: #0009;\n    border-color: #0009;\n  }\n\n  &:hover {\n    cursor: ", ";\n  }\n\n  &.disabled {\n    background: #acacac;\n    border: 1px solid #acacac;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled.button(_templateObject(), function (props) {
  return props.fontSize;
}, function (props) {
  return props.disabled ? 'auto' : 'pointer';
});

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? '15px' : _ref$fontSize,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "className", "disabled", "onClick", "fontSize"]);

  return /*#__PURE__*/React__default.createElement(StyledButton, _extends({
    className: className,
    disabled: disabled,
    onClick: disabled ? null : onClick,
    fontSize: fontSize
  }, props), children);
};

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  color: #464646;\n  background: transparent;\n  border-color: #959595;\n  border-width: 2px;\n  &:active {\n    background: #e2e2e299;\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton$1 = styled(Button)(_templateObject$1());

var SecondaryButton = function SecondaryButton(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return /*#__PURE__*/React__default.createElement(StyledButton$1, props, children);
};

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 54px;\n  border: 1px solid #acacac;\n  border-radius: 10px;\n  box-sizing: border-box;\n  font-family: Montserrat;\n  cursor: text;\n  &.contains-searchbox,\n  &.error {\n    position: relative;\n  }\n  background: white;\n  display: grid;\n  ", "\n\n  ", "\n\n  svg {\n    width: 25px;\n    height: auto;\n    ", "\n    place-self: center center;\n    ", "\n  }\n\n  .icon-container {\n    display: grid;\n    width: 100%;\n    place-self: center;\n    place-content: center;\n  }\n\n  &.hoverable .icon-container {\n    cursor: pointer;\n  }\n\n  &.error {\n    border-width: 2px;\n    border-color: #c50000;\n  }\n\n  &:not(.password).error {\n    svg {\n      fill: #c50000;\n    }\n  }\n\n  input {\n    height: 100%;\n    width: 100%;\n    padding: 0px 25px;\n    outline: none;\n    border: none;\n    font-size: 16px;\n    color: #464646;\n    font-family: Montserrat;\n    font-weight: 500;\n    background: white;\n    border-radius: 10px;\n    box-sizing: border-box;\n    &::placeholder {\n      font-weight: 500;\n      font-family: Montserrat;\n      color: #959595;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr;\n  width: 100%;\n  box-sizing: border-box;\n  grid-row-gap: 2px;\n  &.default {\n    grid-template-rows: auto;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  background: transparent;\n  width: 100%;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 500;\n  color: #c50000;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var FloatingMessage = styled.div(_templateObject$2());
var Container = styled.div(_templateObject2());
var InputBody = styled.div(_templateObject3(), function (props) {
  return props.icon ? "\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 45px;\n  " : null;
}, function (props) {
  return props.isFocused ? "\n    box-shadow: 0 0 5px 0 #dddddd;\n  " : null;
}, function (props) {
  return props.svgStrokeMode ? "stroke: grey;" : 'fill: grey;';
}, function (props) {
  return props.iconIsClickable ? "cursor: pointer;" : null;
});

var Close = function Close(props) {
  return /*#__PURE__*/React__default.createElement("svg", _extends({}, props, {
    fill: "gray",
    viewBox: "0 0 512.001 512.001"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z"
  }));
};
var AlertCircle = function AlertCircle() {
  return /*#__PURE__*/React__default.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
  }));
};
var Eye = function Eye() {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z"
  }));
};
var EyeOff = function EyeOff() {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z"
  }));
};

var Input = React.forwardRef(function (_ref, ref) {
  var errorMsg = _ref.errorMsg,
      props = _objectWithoutPropertiesLoose(_ref, ["errorMsg"]);

  return /*#__PURE__*/React__default.createElement(Container, {
    className: !(props.error && errorMsg) ? 'default' : ''
  }, /*#__PURE__*/React__default.createElement(InputComponent, _extends({}, props, {
    ref: ref
  })), props.error && errorMsg && /*#__PURE__*/React__default.createElement(FloatingMessage, null, errorMsg));
});
var InputComponent = React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      id = _ref2.id,
      disabled = _ref2.disabled,
      placeholder = _ref2.placeholder,
      icon = _ref2.icon,
      _onChange = _ref2.onChange,
      _ref2$onSvgClick = _ref2.onSvgClick,
      onSvgClick = _ref2$onSvgClick === void 0 ? undefined : _ref2$onSvgClick,
      _ref2$onFocus = _ref2.onFocus,
      _onFocus = _ref2$onFocus === void 0 ? undefined : _ref2$onFocus,
      _ref2$shouldStroke = _ref2.shouldStroke,
      shouldStroke = _ref2$shouldStroke === void 0 ? false : _ref2$shouldStroke,
      containerRef = _ref2.containerRef,
      error = _ref2.error,
      type = _ref2.type,
      props = _objectWithoutPropertiesLoose(_ref2, ["className", "id", "disabled", "placeholder", "icon", "onChange", "onSvgClick", "onFocus", "shouldStroke", "containerRef", "error", "type"]);

  ref = !ref ? React.createRef() : ref;
  var hasIcon = !!icon;

  var _useState = React.useState(false),
      isFocused = _useState[0],
      setIsFocused = _useState[1];

  var _useState2 = React.useState(false),
      showPassword = _useState2[0],
      setShowPassword = _useState2[1];

  var showIcon = hasIcon || error || type === 'password';
  var iconIsClickable = onSvgClick || type === 'password';
  return /*#__PURE__*/React__default.createElement(InputBody, {
    shouldStroke: shouldStroke,
    ref: containerRef,
    id: id,
    className: className + " " + (error ? 'error' : '') + " " + (type === 'password' ? 'password' : ''),
    icon: showIcon,
    isFocused: isFocused,
    onClick: function onClick() {
      return ref.current.focus();
    },
    iconIsClickable: iconIsClickable
  }, /*#__PURE__*/React__default.createElement("input", _extends({}, props, {
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
    ref: ref,
    type: type === 'password' ? showPassword ? 'text' : 'password' : 'text'
  })), type === 'password' ? /*#__PURE__*/React__default.createElement("div", {
    className: "icon-container",
    onClick: function onClick() {
      return setShowPassword(function (s) {
        return !s;
      });
    }
  }, showPassword ? /*#__PURE__*/React__default.createElement(EyeOff, null) : /*#__PURE__*/React__default.createElement(Eye, null)) : error ? /*#__PURE__*/React__default.createElement("div", {
    className: "icon-container"
  }, /*#__PURE__*/React__default.createElement(AlertCircle, null)) : hasIcon && /*#__PURE__*/React__default.createElement("div", {
    onClick: onSvgClick,
    className: "icon-container"
  }, icon));
});

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  font-size: ", ";\n  color: #464646;\n  font-weight: 600;\n  display: grid;\n  grid-row-gap: 10px;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledLabeledInput = styled.div(_templateObject$3(), function (props) {
  return props.fontSize;
});

var LabeledInput = React__default.forwardRef(function (_ref, ref) {
  var title = _ref.title,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? '18px' : _ref$fontSize,
      props = _objectWithoutPropertiesLoose(_ref, ["title", "fontSize"]);

  return /*#__PURE__*/React__default.createElement(StyledLabeledInput, {
    fontSize: fontSize
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "field-title"
  }, title), /*#__PURE__*/React__default.createElement(Input, _extends({}, props, {
    ref: ref
  })));
});

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  left: 0;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background: #000000a6;\n  display: grid;\n  top: 0;\n  z-index: 100;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  background: white;\n  padding: 35px;\n  border-radius: 10px;\n  width: 580px;\n  height: 340px;\n  place-self: center center;\n  display: grid;\n  font-family: Montserrat;\n\n  > .close-button {\n    width: 24px;\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    z-index: 10;\n    &:hover {\n      width: 25px;\n      cursor: pointer;\n    }\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var ModalBody = styled.div(_templateObject$4());
var StyledBackground = styled.div(_templateObject2$1());

var Modal = function Modal(_ref) {
  var children = _ref.children,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? undefined : _ref$onClose,
      className = _ref.className,
      CloseIcon = _ref.CloseIcon;
  return /*#__PURE__*/React__default.createElement(StyledBackground, null, /*#__PURE__*/React__default.createElement(ModalBody, {
    className: "modal-div " + className
  }, onClose && (CloseIcon ? /*#__PURE__*/React__default.createElement(CloseIcon, {
    className: "close-button",
    onClick: onClose
  }) : /*#__PURE__*/React__default.createElement(Close, {
    className: "close-button",
    onClick: onClose
  })), children));
};

exports.Button = Button;
exports.Input = Input;
exports.LabeledInput = LabeledInput;
exports.Modal = Modal;
exports.SecondaryButton = SecondaryButton;
//# sourceMappingURL=index.js.map
