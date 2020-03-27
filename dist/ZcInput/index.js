"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("./input"));

var _search = _interopRequireDefault(require("./search"));

var _select = _interopRequireDefault(require("./select"));

var _textarea = _interopRequireDefault(require("./textarea"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZcInput = function ZcInput(props) {
  var status = props.status;

  var onSwitch = function onSwitch() {
    switch (status) {
      case 'search':
        return _react.default.createElement(_search.default, {
          data: props
        });

      case 'select':
        return _react.default.createElement(_select.default, {
          data: props
        });

      case 'textarea':
        return _react.default.createElement(_textarea.default, {
          data: props
        });

      default:
        return _react.default.createElement(_input.default, {
          data: props
        });
    }
  };

  return _react.default.createElement("div", {
    style: {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  }, onSwitch());
};

var _default = ZcInput;
exports.default = _default;