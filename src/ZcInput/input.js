import { Input } from 'antd';
import React, { PureComponent } from 'react';
export default class ZInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
  }
  onStyles = () => {
    const {data}=this.props;
    const { width,style, modify = 'success' } = data;
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
    const {data}=this.props;
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
    const {data}=this.props;
    const { placeholder, defaultValue, length,size = "default", addonBefore, addonAfter, disabled = false } = data;
    const { val } = this.state;
    return (
      <Input
        size={size}
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={this.onChange}
        value={val}
        maxLength={length}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        style={this.onStyles()}
        disabled={disabled}
      />
    )

  }

}