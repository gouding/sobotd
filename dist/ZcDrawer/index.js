"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/drawer/style");

var _drawer = _interopRequireDefault(require("antd/es/drawer"));

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("./index.less"));

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

var ZcDrawer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ZcDrawer, _PureComponent);

  function ZcDrawer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ZcDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ZcDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      visible: _this.props.visible
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      var handler = _this.props.handler;

      _this.setState({
        visible: false,
        height: 0
      });

      handler && handler();
    });

    return _this;
  }

  _createClass(ZcDrawer, [{
    key: "render",
    value: function render() {
      var _React$createElement;

      var _this$props = this.props,
          width = _this$props.width,
          children = _this$props.children,
          title = _this$props.title,
          _this$props$maskClosa = _this$props.maskClosable,
          maskClosable = _this$props$maskClosa === void 0 ? true : _this$props$maskClosa,
          closable = _this$props.closable,
          _this$props$zIndex = _this$props.zIndex,
          zIndex = _this$props$zIndex === void 0 ? 1000 : _this$props$zIndex,
          maskStyle = _this$props.maskStyle;
      return _react.default.createElement("div", null, _react.default.createElement(_drawer.default, (_React$createElement = {
        title: title,
        placement: "right",
        closable: false,
        onClose: this.onClose,
        width: width,
        destroyOnClose: true,
        maskClosable: maskClosable,
        visible: this.props.visible
      }, _defineProperty(_React$createElement, "closable", closable), _defineProperty(_React$createElement, "maskStyle", maskStyle), _defineProperty(_React$createElement, "zIndex", zIndex), _defineProperty(_React$createElement, "className", 'zcLayerMask'), _React$createElement), children));
    }
  }]);

  return ZcDrawer;
}(_react.PureComponent);

exports.default = ZcDrawer;