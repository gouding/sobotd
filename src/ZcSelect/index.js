
import React from 'react'
import { Select, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
const Option = Select.Option;
import './index.less'

export default function (props) {
  const { width, multiple = true, defaultValue = '请选择', handler, list = [{ name: '测试项', value: 1 }], uuId, parent, disabled = false, style, } = props;
  let children = [];
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    children.push(<Option key={i} value={item.value}>{item.name}</Option>)
  }
  const handleChange = (_, ret) => {
    let data;
    if (multiple) {
      data = ret.filter(item => item).map(item => {
        const { props } = item;
        return {
          name: props.children,
          value: props.value
        }
      })
    } else {
      const { props } = ret;
      const { value, children } = props;
      data = {
        value,
        name: children,
      }
    }
    handler && handler({ uuId, data });
  };
  return (
    <LocaleProvider locale={zhCN}>
      <Select
        showSearch
        mode={multiple ? 'multiple' : ''}
        disabled={disabled}
        style={{ width: width, ...style }}
        placeholder={defaultValue}
        defaultValue={multiple ? [] : [defaultValue]}
        onChange={handleChange}
        getPopupContainer={() => parent ? document.getElementById(parent) : document.body}
        optionFilterProp="children"
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {children}
      </Select>
    </LocaleProvider>
  )
}