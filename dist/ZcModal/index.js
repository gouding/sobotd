"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZcAlert = exports.ZcWarning = exports.ZcSuccess = exports.ZcError = exports.default = void 0;

require("antd/es/locale-provider/style");

var _localeProvider = _interopRequireDefault(require("antd/es/locale-provider"));

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _zh_CN = _interopRequireDefault(require("antd/lib/locale-provider/zh_CN"));

var _index = require("../index");

var _index2 = _interopRequireDefault(require("./index.less"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  var visible = props.visible,
      handler = props.handler,
      title = props.title,
      children = props.children,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? '确定' : _props$okText,
      _props$cancleText = props.cancleText,
      cancleText = _props$cancleText === void 0 ? '取消' : _props$cancleText,
      _props$width = props.width,
      width = _props$width === void 0 ? 500 : _props$width,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      _props$destroyOnClose = props.destroyOnClose,
      destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose,
      _props$footerFlag = props.footerFlag,
      footerFlag = _props$footerFlag === void 0 ? true : _props$footerFlag,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? true : _props$closable;

  var handleOk = function handleOk(e) {
    handler && handler(e, true);
  };

  _message2.default.config({
    maxCount: 1
  });

  var handleCancel = function handleCancel(e) {
    handler && handler(e, false);
  };

  return _react.default.createElement(_localeProvider.default, {
    locale: _zh_CN.default
  }, _react.default.createElement(_modal.default, {
    title: title,
    visible: visible,
    width: width,
    maskClosable: maskClosable,
    destroyOnClose: destroyOnClose,
    onOk: handleOk,
    closable: closable,
    onCancel: handleCancel,
    footer: footerFlag ? [_react.default.createElement(_index.ZcBtn, {
      title: okText,
      size: "default",
      type: "o",
      handler: handleOk,
      key: 1
    }), _react.default.createElement(_index.ZcTextBtn, {
      title: cancleText,
      size: "default",
      handler: handleCancel,
      key: 2
    })] : null
  }, children));
};

exports.default = _default;

var ZcSuccess = function ZcSuccess(props, cbk) {
  var _props$title = props.title,
      title = _props$title === void 0 ? '提示' : _props$title,
      _props$okText2 = props.okText,
      okText = _props$okText2 === void 0 ? '知道了' : _props$okText2,
      content = props.content;

  _modal.default.success({
    title: title,
    content: _react.default.createElement("div", null, content),
    okText: okText,
    onOk: function onOk() {
      cbk && cbk();
    }
  });
};

exports.ZcSuccess = ZcSuccess;

var ZcWarning = function ZcWarning(props, cbk) {
  var _props$title2 = props.title,
      title = _props$title2 === void 0 ? '提示' : _props$title2,
      _props$okText3 = props.okText,
      okText = _props$okText3 === void 0 ? '知道了' : _props$okText3,
      content = props.content;

  _modal.default.warning({
    title: title,
    content: _react.default.createElement("div", null, content),
    okText: okText,
    onOk: function onOk() {
      cbk && cbk();
    }
  });
};

exports.ZcWarning = ZcWarning;

var ZcError = function ZcError(props, cbk) {
  var _props$title3 = props.title,
      title = _props$title3 === void 0 ? '提示' : _props$title3,
      _props$okText4 = props.okText,
      okText = _props$okText4 === void 0 ? '知道了' : _props$okText4,
      content = props.content;

  _modal.default.error({
    title: title,
    content: _react.default.createElement("div", null, content),
    okText: okText,
    onOk: function onOk() {
      cbk && cbk();
    }
  });
};

exports.ZcError = ZcError;

var ZcAlert = function ZcAlert(props) {
  var content = props.content,
      type = props.type;

  _message2.default["".concat(type)](content); // setTimeout(()=>{
  //   message.destroy();
  // })

};

exports.ZcAlert = ZcAlert;