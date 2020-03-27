"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("antd/es/locale-provider/style");

var _localeProvider = _interopRequireDefault(require("antd/es/locale-provider"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireDefault(require("react"));

var _zh_CN = _interopRequireDefault(require("antd/lib/locale-provider/zh_CN"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Option = _select.default.Option;

function _default(props) {
  var width = props.width,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? true : _props$multiple,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? '请选择' : _props$defaultValue,
      handler = props.handler,
      _props$list = props.list,
      list = _props$list === void 0 ? [{
    name: '测试项',
    value: 1
  }] : _props$list,
      uuId = props.uuId,
      parent = props.parent,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      style = props.style;
  var children = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    children.push(_react.default.createElement(Option, {
      key: i,
      value: item.value
    }, item.name));
  }

  var handleChange = function handleChange(_, ret) {
    var data;

    if (multiple) {
      data = ret.filter(function (item) {
        return item;
      }).map(function (item) {
        var props = item.props;
        return {
          name: props.children,
          value: props.value
        };
      });
    } else {
      var _props = ret.props;
      var value = _props.value,
          _children = _props.children;
      data = {
        value: value,
        name: _children
      };
    }

    handler && handler({
      uuId: uuId,
      data: data
    });
  };

  return _react.default.createElement(_localeProvider.default, {
    locale: _zh_CN.default
  }, _react.default.createElement(_select.default, {
    showSearch: true,
    mode: multiple ? 'multiple' : '',
    disabled: disabled,
    style: _objectSpread({
      width: width
    }, style),
    placeholder: defaultValue,
    defaultValue: multiple ? [] : [defaultValue],
    onChange: handleChange,
    getPopupContainer: function getPopupContainer() {
      return parent ? document.getElementById(parent) : document.body;
    },
    optionFilterProp: "children",
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, children));
}