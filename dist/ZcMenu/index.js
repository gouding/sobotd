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

var SubMenu = _menu.default.SubMenu;

var _default = function _default(props) {
  var title = props.title,
      _props$menus = props.menus,
      menus = _props$menus === void 0 ? [] : _props$menus,
      handler = props.handler,
      Link = props.Link; // menus = [
  //   {
  //     id: '0',
  //     name: '机器人管理',
  //     path: 'xxx',
  //   }, {
  //     id: '1',
  //     name: '统计',
  //     path: '/robot1',
  //     subFlag: true,
  //     items: [
  //       {
  //         id: '11',
  //         name: '机器人回答统计',
  //         path: '/xxx',
  //       }, {
  //         id: '12',
  //         name: '客户提问统计',
  //         path: '/xxx',
  //       }, {
  //         id: '13',
  //         name: '维护工作量统计',
  //         path: '/xxx',
  //       }, {
  //         id: '14',
  //         name: '问题评价统计',
  //         path: '/xxx',
  //       }, {
  //         id: '15',
  //         name: '机器人转人工统计',
  //         path: '/xxx',
  //       }
  //     ]
  //   }, {
  //     id: '2',
  //     name: '知识库管理',
  //     path: 'robot2',
  //     subFlag: true,
  //     items: [
  //       {
  //         id: '21',
  //         name: '单轮问题管理',
  //         path: '/xxx',
  //       }, {
  //         id: '22',
  //         name: '多轮问题管理',
  //         path: '/xxx',
  //       }, {
  //         id: '23',
  //         name: '智能学习',
  //         path: '/xxx',
  //       }, {
  //         id: '24',
  //         name: '未知问题学习',
  //         path: '/xxx',
  //       }, {
  //         id: '25',
  //         name: '自定义词库',
  //         groupFlag: true,
  //         items: [
  //           {
  //             id: '26',
  //             name: '寒暄问题',
  //             path: 'xxx'
  //           }, {
  //             id: '27',
  //             name: '同义词',
  //             path: 'xxx'
  //           }, {
  //             id: '28',
  //             name: '专业名词',
  //             path: 'xxx'
  //           },
  //         ]
  //       }
  //     ]
  //   }
  // ]
  //分组菜单

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
      }, _react.default.createElement(Link, {
        to: item.path
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
        }, _react.default.createElement(Link, {
          to: item.path
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
        }, _react.default.createElement(Link, {
          to: item.path
        }, item.name));
      }
    });
  };

  var handleClick = function handleClick(e) {
    handler && handler(e);
    console.log(e);
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "menu-title"
  }, title), _react.default.createElement(_menu.default, {
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
  }, onMenu()));
};

exports.default = _default;