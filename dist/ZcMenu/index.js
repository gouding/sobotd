"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

var _react = _interopRequireDefault(require("react"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SubMenu = _menu.default.SubMenu;

var _default = function _default(props) {
  var title = props.title,
      _props$menus = props.menus,
      menus = _props$menus === void 0 ? [] : _props$menus,
      handler = props.handler; //分组菜单

  var onGroupMenu = function onGroupMenu(data) {
    var items = data.items,
        id = data.id,
        name = data.name;
    return _react.default.createElement(_menu.default.ItemGroup, {
      key: id,
      title: name
    }, items.map(function (item) {
      return _react.default.createElement(_menu.default.Item, {
        key: item.id
      }, _react.default.createElement("a", {
        href: "#".concat(item.path)
      }, item.name));
    }));
  }; //二级菜单


  var onSubMenu = function onSubMenu(data) {
    var items = data.items,
        id = data.id,
        name = data.name;
    return _react.default.createElement(SubMenu, {
      key: id,
      title: _react.default.createElement("span", null, name)
    }, items.map(function (item) {
      if (item.groupFlag) {
        //有分组
        return onGroupMenu(item);
      } else {
        return _react.default.createElement(_menu.default.Item, {
          key: item.id
        }, _react.default.createElement("a", {
          href: "#".concat(item.path)
        }, item.name));
      }
    }));
  }; //菜单


  var onMenu = function onMenu() {
    return menus.map(function (item) {
      if (item.subFlag) {
        return onSubMenu(item);
      } else {
        return _react.default.createElement(_menu.default.Item, {
          key: item.id
        }, _react.default.createElement("a", {
          href: "#".concat(item.path)
        }, item.name));
      }
    });
  };

  var handleClick = function handleClick(e) {
    handler && handler.click && handler.click(e);
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "menu-title"
  }, title), _react.default.createElement(_menu.default, _extends({
    onClick: handleClick,
    style: {
      width: 200
    },
    defaultSelectedKeys: ['0'],
    defaultOpenKeys: menus.map(function (item) {
      return item.id;
    }),
    mode: "inline",
    inlineIndent: 20
  }, props), onMenu()));
};

exports.default = _default;