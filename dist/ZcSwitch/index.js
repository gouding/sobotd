"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("antd/es/switch/style");

var _switch = _interopRequireDefault(require("antd/es/switch"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(props) {
  var tips = props.tips,
      defaultChecked = props.defaultChecked,
      _props$size = props.size,
      size = _props$size === void 0 ? 'default' : _props$size,
      uuId = props.uuId,
      handler = props.handler;
  var checkedTips, unCheckedTips;

  if (tips && tips.length > 0) {
    checkedTips = tips[0];
    unCheckedTips = tips[1];
  }

  var onChange = function onChange(data) {
    handler && handler({
      uuId: uuId,
      data: data
    });
  };

  return _react.default.createElement("div", null, tips && tips.length > 0 ? _react.default.createElement(_switch.default, {
    checkedChildren: checkedTips,
    unCheckedChildren: unCheckedTips,
    defaultChecked: defaultChecked,
    size: size,
    onChange: onChange
  }) : _react.default.createElement(_switch.default, {
    defaultChecked: defaultChecked,
    size: size,
    onChange: onChange
  }));
}