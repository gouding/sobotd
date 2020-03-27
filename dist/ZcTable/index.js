"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/locale-provider/style");

var _localeProvider = _interopRequireDefault(require("antd/es/locale-provider"));

require("antd/es/pagination/style");

var _pagination = _interopRequireDefault(require("antd/es/pagination"));

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index.less"));

var _zh_CN = _interopRequireDefault(require("antd/lib/locale-provider/zh_CN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  var columns = props.columns,
      data = props.data,
      uuId = props.uuId,
      checkHandler = props.checkHandler,
      jumpToHandler = props.jumpToHandler,
      rowSelectHandler = props.rowSelectHandler,
      _props$multiFlag = props.multiFlag,
      multiFlag = _props$multiFlag === void 0 ? false : _props$multiFlag,
      _props$size = props.size,
      size = _props$size === void 0 ? 'middle' : _props$size,
      total = props.total,
      _props$pageSize = props.pageSize,
      pageSize = _props$pageSize === void 0 ? 15 : _props$pageSize,
      hideOnSinglePage = props.hideOnSinglePage,
      _props$paginationFlag = props.paginationFlag,
      paginationFlag = _props$paginationFlag === void 0 ? true : _props$paginationFlag,
      _props$type = props.type,
      type = _props$type === void 0 ? 'checkbox' : _props$type,
      _props$scrollFlag = props.scrollFlag,
      scrollFlag = _props$scrollFlag === void 0 ? true : _props$scrollFlag;
  var rowSelection = {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      var data = selectedRows;
      checkHandler && checkHandler({
        uuId: uuId,
        data: data
      });
    },
    type: type
  };

  var onPageChange = function onPageChange(page) {
    jumpToHandler && jumpToHandler({
      uuId: uuId,
      data: page
    });
  };

  var onRow = function onRow(e) {
    return {
      onClick: function onClick() {
        rowSelectHandler && rowSelectHandler({
          uuId: uuId,
          data: e
        });
      }
    };
  };

  var params = {
    columns: columns,
    dataSource: data,
    size: size,
    pagination: false,
    onRow: onRow // scroll: { x: 1500, y: 300 }

  };
  if (multiFlag) params.rowSelection = rowSelection;
  return _react.default.createElement("div", null, _react.default.createElement(_localeProvider.default, {
    locale: _zh_CN.default
  }, _react.default.createElement("div", {
    className: scrollFlag ? 'zc-scroll-bar' : ''
  }, _react.default.createElement(_table.default, _extends({}, params, {
    className: 'table'
  })), paginationFlag ? _react.default.createElement("div", {
    className: 'pagination'
  }, _react.default.createElement(_pagination.default, {
    showQuickJumper: true,
    hideOnSinglePage: hideOnSinglePage,
    defaultCurrent: 1,
    defaultPageSize: pageSize,
    total: total,
    onChange: onPageChange
  })) : '')));
};

exports.default = _default;