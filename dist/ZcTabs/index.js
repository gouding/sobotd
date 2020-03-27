"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPane = _tabs.default.TabPane;

var _default = function _default(props) {
  var _props$items = props.items,
      items = _props$items === void 0 ? [{
    name: 'item',
    content: function content() {
      return _react.default.createElement("div", null, "\u5A03\u54C8\u54C8");
    }
  }] : _props$items,
      handler = props.handler,
      uuId = props.uuId,
      type = props.type;

  var cbk = function cbk(data) {
    handler && handler({
      uuId: uuId,
      data: data
    });
  };

  var onTabPanes = function onTabPanes() {
    return items.map(function (item, i) {
      return _react.default.createElement(TabPane, {
        key: i,
        tab: item.name
      }, _react.default.createElement(item.content, null));
    });
  };

  return _react.default.createElement(_tabs.default, {
    defaultActiveKey: "0",
    onChange: cbk,
    type: type
  }, onTabPanes());
};

exports.default = _default;