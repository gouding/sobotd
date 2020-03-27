"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZcUploadBtn = exports.ZcDownloadBtn = exports.ZcTextBtn = exports.ZcCancleBtn = exports.ZcStopBtn = exports.ZcAddBtn = exports.ZcOpenBtn = exports.ZcMoveBtn = exports.ZcEditBtn = exports.ZcTimeBtn = exports.ZcDelBtn = exports.ZcBtn = void 0;

var _index = _interopRequireDefault(require("./index.less"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//普通的按钮
var ZcBtn = function ZcBtn(props) {
  //type o 表示实心 有底色  默为是无底色
  var type = props.type,
      _props$size = props.size,
      size = _props$size === void 0 ? 'small' : _props$size,
      _props$title = props.title,
      title = _props$title === void 0 ? '确定' : _props$title,
      handler = props.handler,
      _props$width = props.width,
      width = _props$width === void 0 ? 80 : _props$width;

  var fn = function fn(e) {
    handler && handler(e);
  };

  return _react.default.createElement("button", {
    type: "button",
    onClick: fn,
    style: {
      minWidth: width
    },
    className: "".concat(size === 'small' ? 'small' : size === 'default' ? 'default' : 'large', " ").concat(type === 'o' ? 'o' : '', " zcJBtn"),
    name: "button"
  }, title);
}; //一般按钮


exports.ZcBtn = ZcBtn;

var ZcTextBtn = function ZcTextBtn(props) {
  //type o 表示实心 有底色  默为是无底色
  var _props$size2 = props.size,
      size = _props$size2 === void 0 ? 'small' : _props$size2,
      _props$title2 = props.title,
      title = _props$title2 === void 0 ? '取消' : _props$title2,
      handler = props.handler,
      _props$width2 = props.width,
      width = _props$width2 === void 0 ? 'auto' : _props$width2;

  var fn = function fn(e) {
    handler && handler(e);
  };

  return _react.default.createElement("button", {
    type: "button",
    onClick: fn,
    style: {
      minWidth: width
    },
    className: "zcJBtn btnTextCancel ".concat(size === 'small' ? 'small' : size === 'default' ? 'default' : 'large', "  "),
    name: "button"
  }, title);
}; //删除按钮


exports.ZcTextBtn = ZcTextBtn;

var ZcDelBtn = function ZcDelBtn(props) {
  var _props$title3 = props.title,
      title = _props$title3 === void 0 ? '删除' : _props$title3,
      handler = props.handler;

  var fn = function fn(e) {
    handler && handler(e);
  };

  return _react.default.createElement("button", {
    type: "button",
    onClick: fn,
    className: " zcJBtn btnDel btn",
    name: "button"
  }, title);
}; //时间按钮


exports.ZcDelBtn = ZcDelBtn;

var ZcTimeBtn = function ZcTimeBtn(props) {
  var _props$title4 = props.title,
      title = _props$title4 === void 0 ? '时间' : _props$title4,
      handler = props.handler;

  var fn = function fn(e) {
    handler && handler(e);
  };

  return _react.default.createElement("button", {
    type: "button",
    onClick: fn,
    className: " zcJBtn btnTime btn ",
    name: "button"
  }, title);
}; //编辑按钮


exports.ZcTimeBtn = ZcTimeBtn;

var ZcEditBtn = function ZcEditBtn(props) {
  var _props$title5 = props.title,
      title = _props$title5 === void 0 ? '编辑' : _props$title5,
      handler = props.handler;

  var fn = function fn(e) {
    handler && handler(e);
  };

  return _react.default.createElement("button", {
    type: "button",
    onClick: fn,
    className: " zcJBtn btnEdit btn ",
    name: "button"
  }, title);
}; //取消按钮


exports.ZcEditBtn = ZcEditBtn;

var ZcCancleBtn = function ZcCancleBtn(props) {
  var _props$title6 = props.title,
      title = _props$title6 === void 0 ? '取消' : _props$title6,
      handler = props.handler;

  var fn = function fn(e) {
    handler && handler(e);
  };

  return _react.default.createElement("button", {
    type: "button",
    onClick: fn,
    className: "zcJBtn btnCancle btn",
    name: "button"
  }, title);
}; //启用按钮


exports.ZcCancleBtn = ZcCancleBtn;

var ZcOpenBtn = function ZcOpenBtn(props) {
  var _props$title7 = props.title,
      title = _props$title7 === void 0 ? '启用' : _props$title7,
      handler = props.handler;

  var fn = function fn(e) {
    handler && handler(e);
  };

  return _react.default.createElement("button", {
    type: "button",
    onClick: fn,
    className: "zcJBtn btnOpen btn",
    name: "button"
  }, title);
}; //停用按钮


exports.ZcOpenBtn = ZcOpenBtn;

var ZcStopBtn = function ZcStopBtn(props) {
  var _props$title8 = props.title,
      title = _props$title8 === void 0 ? '停用' : _props$title8,
      handler = props.handler;

  var fn = function fn(e) {
    handler && handler(e);
  };

  return _react.default.createElement("button", {
    type: "button",
    onClick: fn,
    className: "zcJBtn btnStop btn",
    name: "button"
  }, title);
}; //转移按钮


exports.ZcStopBtn = ZcStopBtn;

var ZcMoveBtn = function ZcMoveBtn(props) {
  var _props$title9 = props.title,
      title = _props$title9 === void 0 ? '转移' : _props$title9,
      handler = props.handler;

  var fn = function fn(e) {
    handler && handler(e);
  };

  return _react.default.createElement("button", {
    type: "button",
    onClick: fn,
    className: " zcJBtn btnMove btn ",
    name: "button"
  }, title);
}; //增加按钮


exports.ZcMoveBtn = ZcMoveBtn;

var ZcAddBtn = function ZcAddBtn(props) {
  var _props$title10 = props.title,
      title = _props$title10 === void 0 ? '增加' : _props$title10,
      handler = props.handler;

  var fn = function fn(e) {
    handler && handler(e);
  };

  return _react.default.createElement("button", {
    type: "button",
    onClick: fn,
    className: " zcJBtn btnAdd btn",
    name: "button"
  }, title);
};

exports.ZcAddBtn = ZcAddBtn;

var ZcDownloadBtn = function ZcDownloadBtn(props) {
  var _props$title11 = props.title,
      title = _props$title11 === void 0 ? '下载' : _props$title11,
      handler = props.handler;

  var fn = function fn(e) {
    handler && handler(e);
  };

  return _react.default.createElement("button", {
    type: "button",
    onClick: fn,
    className: 'downloadBtn',
    name: "button"
  }, title);
};

exports.ZcDownloadBtn = ZcDownloadBtn;

var ZcUploadBtn = function ZcUploadBtn(props) {
  var _props$title12 = props.title,
      title = _props$title12 === void 0 ? '上传' : _props$title12,
      handler = props.handler;

  var fn = function fn(e) {
    handler && handler(e);
  };

  return _react.default.createElement("button", {
    type: "button",
    onClick: fn,
    className: 'uploadBtn',
    name: "button"
  }, title);
};

exports.ZcUploadBtn = ZcUploadBtn;