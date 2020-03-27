"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputGroup = _input.default.Group;
var Option = _select.default.Option;

var ZSelect =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ZSelect, _PureComponent);

  function ZSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ZSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ZSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      item: {},
      inputValue: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onHandler", function () {
      var data = _this.props.data;
      var uuId = data.uuId,
          handler = data.handler;
      var _this$state = _this.state,
          item = _this$state.item,
          inputValue = _this$state.inputValue;
      handler && handler({
        uuId: uuId,
        data: {
          inputValue: inputValue,
          item: item
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSelectChange", function (data, ret) {
      var props = ret.props;
      var item = {
        name: props.children,
        value: props.value
      };

      _this.setState({
        item: item
      }, function () {
        _this.onHandler();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputChange", function (e) {
      var inputValue = e.target.value;

      _this.setState({
        inputValue: inputValue
      }, function () {
        _this.onHandler();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onItem", function (items) {
      return items.map(function (item) {
        return _react.default.createElement(Option, {
          value: item.value,
          key: item.value
        }, item.name);
      });
    });

    return _this;
  }

  _createClass(ZSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      var options = data.options;
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      var options = data.options,
          width = data.width,
          defaultValue = data.defaultValue,
          placeholder = data.placeholder,
          addonAfter = data.addonAfter,
          disabled = data.disabled,
          size = data.size;
      var _options$0$name$title = options[0]['name'].title,
          title = _options$0$name$title === void 0 ? '请选择' : _options$0$name$title;
      return _react.default.createElement("div", null, _react.default.createElement(InputGroup, {
        compact: true
      }, _react.default.createElement(_select.default, {
        defaultValue: title,
        onChange: this.onSelectChange,
        disabled: disabled,
        size: size
      }, this.onItem(options)), _react.default.createElement(_input.default, {
        style: {
          width: width
        },
        defaultValue: defaultValue,
        placeholder: placeholder,
        addonAfter: addonAfter,
        disabled: disabled,
        size: size,
        onChange: this.onInputChange,
        onPressEnter: this.onInputChange
      })));
    }
  }]);

  return ZSelect;
}(_react.PureComponent);

exports.default = ZSelect;