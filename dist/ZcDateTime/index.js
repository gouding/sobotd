"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("antd/es/locale-provider/style");

var _localeProvider = _interopRequireDefault(require("antd/es/locale-provider"));

require("antd/es/date-picker/style");

var _datePicker = _interopRequireDefault(require("antd/es/date-picker"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _zh_CN = _interopRequireDefault(require("antd/lib/locale-provider/zh_CN"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangePicker = _datePicker.default.RangePicker;

function _default(props) {
  var _props$zcShowTime = props.zcShowTime,
      zcShowTime = _props$zcShowTime === void 0 ? false : _props$zcShowTime,
      _props$zcPickerModel = props.zcPickerModel,
      zcPickerModel = _props$zcPickerModel === void 0 ? 'date' : _props$zcPickerModel,
      handler = props.handler,
      uuId = props.uuId; //日期发生变化时执行

  var onChange = function onChange(date, dateStr) {
    handler && handler({
      uuId: uuId,
      data: dateStr
    });
  }; //日期格式宽度


  var widthHanlder = function widthHanlder(timeFlag, model) {
    //显示时间
    if (timeFlag) {
      switch (model) {
        case 'date':
          return {
            width: 190
          };

        case 'range':
          return {
            width: 330
          };
      }
    } else {
      switch (model) {
        case 'date':
          return {
            width: 140
          };

        case 'range':
          return {
            width: 210
          };
      }
    }
  };

  var onDefaultValue = function onDefaultValue(timeFlag, startFlag) {
    if (timeFlag) {
      return startFlag ? (0, _moment.default)(new Date()).format('YYYY-MM-DD 00:00:00') : (0, _moment.default)(new Date()).format('YYYY-MM-DD 23:59:59');
    } else {
      return (0, _moment.default)(new Date()).format('YYYY-MM-DD');
    }
  }; //日期格式化


  var forMatHandler = function forMatHandler(timeFlag, startFlag) {
    return timeFlag ? "YYYY-MM-DD HH:mm:ss" : 'YYYY-MM-DD';
  };

  return _react.default.createElement(_localeProvider.default, {
    locale: _zh_CN.default
  }, _react.default.createElement("div", {
    style: {
      display: 'inline-block'
    }
  }, zcPickerModel === 'date' ? _react.default.createElement(_datePicker.default, {
    defaultValue: (0, _moment.default)(new Date(), forMatHandler(zcShowTime)),
    size: 'small',
    style: widthHanlder(zcShowTime, zcPickerModel),
    format: forMatHandler(zcShowTime),
    onChange: onChange,
    showTime: zcShowTime ? {
      defaultValue: [(0, _moment.default)('00:00:00', 'HH:mm:ss'), (0, _moment.default)('23:59:59', 'HH:mm:ss')]
    } : false,
    showToday: true
  }) : _react.default.createElement(RangePicker, {
    ranges: {
      '今天': [(0, _moment.default)(), (0, _moment.default)()],
      '昨天': [(0, _moment.default)().subtract(1, 'day'), (0, _moment.default)().endOf('day')],
      '过去7天': [(0, _moment.default)().subtract(7, 'day'), (0, _moment.default)().endOf('days')],
      '过去30天': [(0, _moment.default)().subtract(30, 'day'), (0, _moment.default)().endOf('days')]
    },
    size: 'small',
    style: widthHanlder(zcShowTime, zcPickerModel),
    placeholder: zcShowTime ? [onDefaultValue(true, true), onDefaultValue(true, false)] : [onDefaultValue(false), onDefaultValue(false)],
    showTime: zcShowTime ? {
      defaultValue: [(0, _moment.default)('00:00:00', 'HH:mm:ss'), (0, _moment.default)('23:59:59', 'HH:mm:ss')]
    } : false,
    format: forMatHandler(zcShowTime),
    onChange: onChange
  })));
}

;