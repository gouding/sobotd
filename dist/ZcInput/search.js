"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Search = _input.default.Search;

function _default(props) {
  var data = props.data;
  var enterButton = data.enterButton,
      placeholder = data.placeholder,
      size = data.size,
      handler = data.handler,
      uuId = data.uuId,
      width = data.width,
      style = data.style,
      modify = data.modify,
      defaultValue = data.defaultValue;

  var onStyles = function onStyles() {
    if (modify === 'success') return _objectSpread({
      width: width,
      verticalAlign: 'middle'
    }, style);else if (modify === 'error') {
      return _objectSpread({
        width: width,
        verticalAlign: 'middle',
        border: '1px solid red',
        boxShadow: '0 0 6px 1px rgba(255,0,0,.3)'
      }, style);
    }
  };

  var onSearch = function onSearch(data) {
    handler && handler({
      uuId: uuId,
      data: data
    });
  };

  return _react.default.createElement("div", null, _react.default.createElement(Search, {
    size: size,
    placeholder: placeholder,
    onSearch: onSearch,
    enterButton: enterButton,
    defaultValue: defaultValue,
    style: onStyles()
  }));
}