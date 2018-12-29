import { Input } from 'antd';
import React,{ PureComponent } from 'react';
const { TextArea } = Input;
export default class ZcInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
  }
  onStyles = () => {
    const { width, status = 'success' } = this.props;
    if (status === 'success')
      return {
        width: width,
        verticalAlign: 'middle'
      }
    else if (status === 'error') {
      return {
        width: width,
        verticalAlign: 'middle',
        border: '1px solid red',
        boxShadow: '0 0 6px 1px rgba(255,0,0,.3)',
      }
    }
  }
  onChange = e => {
    const { handler = new Function(), uuId, type } = this.props;
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
    const { width, placeholder, addonAfter, textarea = false, rows = 1,disabled=false } = this.props;
    const { val } = this.state;
    {
      return textarea ?
        <TextArea
          rows={rows}
          width={width}
          placeholder={placeholder}
          onChange={this.onChange}
          value={val}>
          disabled={disabled}
        </TextArea>
        :
        <Input
          size="small"
          onChange={this.onChange}
          value={val}
          placeholder={placeholder}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          style={this.onStyles()}
          disabled={disabled}
          addonAfter={addonAfter} />
    }

  }

}