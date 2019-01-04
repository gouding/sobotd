import React from 'react'
import { DatePicker, LocaleProvider } from 'antd';
import moment from 'moment';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import './index.less'

const { RangePicker } = DatePicker;

export default function (props) {
  const { zcShowTime = false, zcPickerModel = 'date', handler, uuId } = props;
  //日期发生变化时执行
  const onChange = (date, dateStr) => {
    handler && handler({ uuId, data: dateStr });
  };
  //日期格式宽度
  const widthHanlder = (timeFlag, model) => {
    //显示时间
    if (timeFlag) {
      switch (model) {
        case 'date':
          return { width: 190 };
        case 'range':
          return { width: 330 };
      }
    } else {
      switch (model) {
        case 'date':
          return { width: 140 };
        case 'range':
          return { width: 210 };
      }
    }
  }
  const onDefaultValue = (timeFlag, startFlag) => {
    if (timeFlag) {
      return startFlag ? moment(new Date()).format('YYYY-MM-DD 00:00:00') : moment(new Date()).format('YYYY-MM-DD 23:59:59');
    } else {
      return moment(new Date()).format('YYYY-MM-DD');
    }
  }
  //日期格式化
  const forMatHandler = (timeFlag, startFlag) => {
    return timeFlag ? `YYYY-MM-DD HH:mm:ss` : 'YYYY-MM-DD';
  };
  return (
    <LocaleProvider locale={zhCN}>
      <div style={{ display: 'inline-block' }}>
        {
          zcPickerModel === 'date' ?
            <DatePicker
              defaultValue={moment(new Date(), forMatHandler(zcShowTime))}
              size={'small'}
              style={widthHanlder(zcShowTime, zcPickerModel)}
              format={forMatHandler(zcShowTime)}
              onChange={onChange}
              showTime={zcShowTime ? { defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')] } : false}
              showToday
            /> : <RangePicker
              ranges={
                {
                  '今天': [moment(), moment()],
                  '昨天': [moment().subtract(1, 'day'), moment().endOf('day')],
                  '过去7天': [moment().subtract(7, 'day'), moment().endOf('days')],
                  '过去30天': [moment().subtract(30, 'day'), moment().endOf('days')],

                }}
              size={'small'}
              style={widthHanlder(zcShowTime, zcPickerModel)}
              placeholder={zcShowTime ? [onDefaultValue(true, true), onDefaultValue(true, false)] : [onDefaultValue(false), onDefaultValue(false)]}
              showTime={zcShowTime ? {
                defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')],
              } : false}
              format={forMatHandler(zcShowTime)}
              onChange={onChange}
            />
        }
      </div>
    </LocaleProvider>
  )
};