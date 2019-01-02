// import React from 'react'
// import { Input } from 'antd'
// const { TextArea } = Input;
// export default function (props) {
//   const { data } = props;
//   const { rows = 4, placeholder = '请输入', disabled, defaultValue, } = data;
//   const onChange = (e) => {
//     console.log(e.target.value);
//   }
//   return (
//     <div>
//       <TextArea
//         rows={rows}
//         placeholder={placeholder}
//         // onPressEnter={onChange}
//         onChange={onchange}
//         disabled={disabled}
//         value={23}
//       />
//     </div>
//   )
// }

import { Input } from 'antd';
import React, { PureComponent } from 'react';
const { TextArea } = Input;
export default class ZTextArea extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      val: props.data.defaultValue,
    }
  }
  onStyles = () => {
    const { data } = this.props;
    const { width, style, modify = 'success' } = data;
    if (modify === 'success')
      return {
        width: width,
        verticalAlign: 'middle',
        ...style,
      }
    else if (modify === 'error') {
      return {
        width: width,
        verticalAlign: 'middle',
        border: '1px solid red',
        boxShadow: '0 0 6px 1px rgba(255,0,0,.3)',
        ...style,
      }
    }
  }
  onChange = e => {
    const { data } = this.props;
    const { handler = new Function(), uuId, type } = data;
    const { value } = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    let res = true;
    if (type === 'number') {
      res = false;
      if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
        res = true
      }
    }
    if (res) {
      this.setState({
        val: value,
      });
      const data = { uuId, data: value };
      handler && handler(data);
    }
  }
  onBlur = (e) => {
    const { blur, uuId } = this.props;
    blur && blur({ e, uuId });
  }
  onFocus = (e) => {
    const { focus, uuId } = this.props;
    focus && focus({ e, uuId });
  }
  render() {
    const { data } = this.props;
    const { placeholder='请输入', length, size = "default", disabled = false, rows = 4, } = data;
    const { val } = this.state;
    return (
      <TextArea
        size={size}
        placeholder={placeholder}
        onChange={this.onChange}
        value={val}
        maxLength={length}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        style={this.onStyles()}
        disabled={disabled}
        rows={rows}
      />
    )

  }

}