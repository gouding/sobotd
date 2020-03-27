"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextArea = _input.default.TextArea;

var ZTextArea =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ZTextArea, _PureComponent);

  function ZTextArea(props) {
    var _this;

    _classCallCheck(this, ZTextArea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZTextArea).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onStyles", function () {
      var data = _this.props.data;
      var width = data.width,
          style = data.style,
          _data$modify = data.modify,
          modify = _data$modify === void 0 ? 'success' : _data$modify;
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
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (e) {
      var data = _this.props.data;
      var _data$handler = data.handler,
          handler = _data$handler === void 0 ? new Function() : _data$handler,
          uuId = data.uuId,
          type = data.type;
      var value = e.target.value;
      var reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
      var res = true;

      if (type === 'number') {
        res = false;

        if (!isNaN(value) && reg.test(value) || value === '' || value === '-') {
          res = true;
        }
      }

      if (res) {
        _this.setState({
          val: value
        });

        var _data = {
          uuId: uuId,
          data: value
        };
        handler && handler(_data);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (e) {
      var _this$props = _this.props,
          blur = _this$props.blur,
          uuId = _this$props.uuId;
      blur && blur({
        e: e,
        uuId: uuId
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (e) {
      var _this$props2 = _this.props,
          focus = _this$props2.focus,
          uuId = _this$props2.uuId;
      focus && focus({
        e: e,
        uuId: uuId
      });
    });

    _this.state = {
      val: props.data.defaultValue
    };
    return _this;
  }

  _createClass(ZTextArea, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var _data$placeholder = data.placeholder,
          placeholder = _data$placeholder === void 0 ? '请输入' : _data$placeholder,
          length = data.length,
          _data$size = data.size,
          size = _data$size === void 0 ? "default" : _data$size,
          _data$disabled = data.disabled,
          disabled = _data$disabled === void 0 ? false : _data$disabled,
          _data$rows = data.rows,
          rows = _data$rows === void 0 ? 4 : _data$rows;
      var val = this.state.val;
      return _react.default.createElement(TextArea, {
        size: size,
        placeholder: placeholder,
        onChange: this.onChange,
        value: val,
        maxLength: length,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        style: this.onStyles(),
        disabled: disabled,
        rows: rows
      });
    }
  }]);

  return ZTextArea;
}(_react.PureComponent);

exports.default = ZTextArea;