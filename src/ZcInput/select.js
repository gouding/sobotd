import React, { PureComponent } from 'react'
import { Input, Select } from 'antd'
const InputGroup = Input.Group;
const Option = Select.Option;

export default class ZSelect extends PureComponent {
  state = {
    item: {},
    inputValue: '',
  }
  componentDidMount() {
    const { data } = this.props;
    const { options } = data;
  }
  onHandler = () => {
    const { data } = this.props;
    const { uuId, handler } = data;
    const { item, inputValue } = this.state;
    handler && handler({ uuId, data: { inputValue, item } });
  }
  onSelectChange = (data, ret) => {
    const { props } = ret;
    const item = { name: props.children, value: props.value };
    this.setState({
      item
    }, () => {
      this.onHandler();
    });

  }
  onInputChange = (e) => {
    const inputValue = e.target.value;
    this.setState({
      inputValue
    }, () => {
      this.onHandler();
    })
  }
  onItem = (items) => {
    return items.map(item => (
      <Option value={item.value} key={item.value}>{item.name}</Option>
    ))
  }
  render() {
    const { data } = this.props;
    const {
      options = [{ name: '小丁哥', value: '001' }, { name: '小板凳', value: '002' }],
      width,
      defaultValue,
      placeholder,
      addonAfter,
      disabled,
      size,
    } = data;
    const { title = '请选择' } = options[0]['name'];
    return (
      <div>
        <InputGroup compact>
          <Select defaultValue={title} onChange={this.onSelectChange} disabled={disabled} size={size}>
            {this.onItem(options)}
          </Select>
          <Input
            style={{ width }}
            defaultValue={defaultValue}
            placeholder={placeholder}
            addonAfter={addonAfter}
            disabled={disabled}
            size={size}
            onChange={this.onInputChange}
            onPressEnter={this.onInputChange}
          />
        </InputGroup>
      </div>
    )
  }
}