"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

var _ZcButton = require("../ZcButton");

var _fields = _interopRequireDefault(require("./fields.less"));

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

var CheckboxGroup = _checkbox.default.Group;

var FidlesLayer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FidlesLayer, _PureComponent);

  function FidlesLayer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FidlesLayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FidlesLayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      show: false,
      mutex: true,
      loading: false,
      checkedData: [],
      data: [{
        title: 'aaa',
        value: '001',
        disabled: true,
        checked: true,
        default: true
      }, {
        title: 'bbb',
        value: '002',
        disabled: false,
        checked: true,
        default: true
      }, {
        title: 'ccc',
        value: '003',
        disabled: false,
        checked: false,
        default: false
      }, {
        title: 'ddd',
        value: '004',
        disabled: false,
        checked: false,
        default: false
      }, {
        title: 'eee',
        value: '005',
        disabled: false,
        checked: false,
        default: false
      }]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFields", function () {
      var show = _this.state.show;
      var _this$props$data = _this.props.data,
          data = _this$props$data === void 0 ? [{
        checkd: true,
        value: 'item1'
      }, {
        checkd: false,
        value: 'item2'
      }] : _this$props$data;
      var checkedData = data.filter(function (item) {
        return item.checked;
      }).map(function (item) {
        return item.value;
      });

      _this.setState({
        show: !show,
        checkedData: checkedData
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value) {
      _this.setState({
        checkedData: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEnsure", function () {
      var _this$props = _this.props,
          handler = _this$props.handler,
          uuId = _this$props.uuId;
      var _this$state = _this.state,
          checkedData = _this$state.checkedData,
          show = _this$state.show;
      handler && handler({
        uuId: uuId,
        type: 'ensuer',
        data: checkedData
      });

      _this.setState({
        show: !show
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCancle", function () {
      var _this$props2 = _this.props,
          handler = _this$props2.handler,
          uuId = _this$props2.uuId;
      handler && handler({
        uuId: uuId,
        type: 'cancle'
      });

      _this.setState({
        show: !_this.state.show
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDefault", function () {
      var _this$props3 = _this.props,
          handler = _this$props3.handler,
          data = _this$props3.data,
          uuId = _this$props3.uuId;
      setTimeout(function () {
        _this.setState({
          mutex: false
        }), setTimeout(function () {
          _this.setState({
            mutex: true,
            loading: false
          });
        });
      }, 500);
      var defaultValue = data.filter(function (item) {
        return item.default;
      }).map(function (item) {
        return item.value;
      });
      data.forEach(function (item) {
        item.checked = item.default;
      });

      _this.setState(_objectSpread({
        loading: true,
        checkedData: defaultValue
      }, data)); // handler && handler({ uuId, type: 'default', data: defaultValue });

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCheckBox", function () {
      var data = _this.props.data;
      return data.map(function (item, i) {
        return _react.default.createElement(_col.default, {
          key: i,
          span: 6,
          style: {
            lineHeight: '30px'
          }
        }, _react.default.createElement(_checkbox.default, {
          disabled: item.disabled,
          value: item.value
        }, item.name));
      });
    });

    return _this;
  }

  _createClass(FidlesLayer, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          mutex = _this$state2.mutex,
          loading = _this$state2.loading,
          show = _this$state2.show;
      var data = this.props.data;
      var defaultValue = data.filter(function (item) {
        return item.checked;
      }).map(function (item) {
        return item.value;
      });
      return _react.default.createElement("div", {
        className: 'checkBoxLayer'
      }, _react.default.createElement(_ZcButton.ZcBtn, {
        title: '自定义字段',
        handler: this.onFields
      }), show ? _react.default.createElement("div", {
        className: 'layer'
      }, mutex ? _react.default.createElement(_spin.default, {
        spinning: loading
      }, _react.default.createElement(_checkbox.default.Group, {
        style: {
          width: '100%'
        },
        defaultValue: defaultValue,
        onChange: this.onChange
      }, _react.default.createElement(_row.default, null, this.onCheckBox()))) : '', _react.default.createElement("div", {
        className: 'footer'
      }, _react.default.createElement(_ZcButton.ZcBtn, {
        title: '确定',
        type: "o",
        handler: this.onEnsure
      }), _react.default.createElement(_ZcButton.ZcTextBtn, {
        title: '取消',
        handler: this.onCancle
      }), _react.default.createElement("span", {
        className: 'defaultBtn',
        onClick: this.onDefault
      }, "\u6062\u590D\u9ED8\u8BA4"))) : '');
    }
  }]);

  return FidlesLayer;
}(_react.PureComponent);

exports.default = FidlesLayer;