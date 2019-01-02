import React, { PureComponent } from 'react'
import { Radio } from 'antd'
const RadioGroup = Radio.Group;

export default class ZcRadio extends PureComponent {
  state = {
    value: this.props.defaultValue,
  }
  onChange = (e) => {
    const { value, tag } = e.target;
    const { uuId, handler } = this.props;
    this.setState({
      value: e.target.value,
    });
    const data = { name: tag, value };
    handler && handler({ uuId, data });
  }
  onItems = () => {
    const { data } = this.props;
    return data.map(item => (
      <Radio value={item.value} disabled={item.disabled} key={item.value} tag={item.name}>{item.name}</Radio>
    ))
  }
  render() {
    const { value } = this.state;
    return (
      <RadioGroup onChange={this.onChange} value={value}>
        {this.onItems()}
      </RadioGroup>
    )
  }
}