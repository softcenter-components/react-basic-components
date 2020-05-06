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
  var data = _taggedTemplateLiteralLoose(["\n  color: #fff;\n  background: #0072bc;\n  width: 165px;\n  height: 45px;\n  font-size: 15px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600;\n  border-radius: 10px;\n  border: 1px solid #0072bc;\n  outline: none;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:active {\n    background: #0009;\n    border: 1px solid #0009;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled.button(_templateObject());

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return /*#__PURE__*/React__default.createElement(StyledButton, _extends({
    className: className
  }, props), children);
};

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 54px;\n  border: 1px solid #acacac;\n  padding: 2px;\n  border-radius: 10px;\n  font-family: Montserrat;\n  cursor: text;\n  &.contains-searchbox,\n  &.error {\n    position: relative;\n  }\n  background: white;\n  display: grid;\n  ", "\n\n  ", "\n\n  svg {\n    width: 50%;\n    height: auto;\n    ", "\n    place-self: center center;\n  }\n\n  .icon-container {\n    display: grid;\n    width: 100%;\n    place-self: center;\n    place-content: center;\n  }\n\n  &.hoverable .icon-container {\n    cursor: pointer;\n  }\n\n  &.error {\n    margin-bottom: 20px;\n    border-width: 2px;\n    border-color: #bc0000;\n    svg {\n      fill: #bc0000;\n    }\n  }\n\n  input {\n    height: 100%;\n    width: 100%;\n    padding: 0px 15px;\n    outline: none;\n    border: none;\n    font-size: 16px;\n    color: #464646;\n    font-family: Montserrat;\n    background: white;\n    border-radius: 10px;\n    &::placeholder {\n      font-weight: 500;\n      font-family: Montserrat;\n      color: #959595;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  background: transparent;\n  width: 100%;\n  height: 20px;\n  bottom: -25px;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 500;\n  color: #bc0000;\n  position: absolute;\n"]);

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

var Input = React.forwardRef(function (_ref, ref) {
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

  ref = !ref ? React.createRef() : ref;

  var _useState = React.useState(false),
      isFocused = _useState[0],
      setIsFocused = _useState[1];

  return /*#__PURE__*/React__default.createElement(InputBody, {
    shouldStroke: shouldStroke,
    ref: containerRef,
    id: id,
    className: className + " " + (error ? 'error' : ''),
    icon: hasIcon && icon,
    isFocused: isFocused,
    onClick: function onClick() {
      return ref.current.focus();
    }
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
    ref: ref
  })), icon && hasIcon ? /*#__PURE__*/React__default.createElement("div", {
    onClick: onSvgClick,
    className: "icon-container"
  }, icon) : null, error && errorMsg && /*#__PURE__*/React__default.createElement(FloatingMessage, null, "* ", errorMsg));
});

var Close = function Close(props) {
  return /*#__PURE__*/React__default.createElement("svg", _extends({}, props, {
    fill: "gray",
    viewBox: "0 0 512.001 512.001"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z"
  }));
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  left: 0;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background: #000000a6;\n  display: grid;\n  top: 0;\n  z-index: 100;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  background: white;\n  padding: 35px;\n  border-radius: 10px;\n  width: 580px;\n  height: 340px;\n  place-self: center center;\n  display: grid;\n  font-family: Montserrat;\n\n  > .close-button {\n    width: 24px;\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    z-index: 10;\n    &:hover {\n      width: 25px;\n      cursor: pointer;\n    }\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var ModalBody = styled.div(_templateObject$2());
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
exports.Modal = Modal;
//# sourceMappingURL=index.js.map
