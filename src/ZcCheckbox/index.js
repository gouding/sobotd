import React, { PureComponent } from 'react'
import { Checkbox } from 'antd'
import FieldsCheckbox from './fields'

export { FieldsCheckbox, };

export default class ZCheckbox extends PureComponent {
  onChange = (e) => {
    const { handler, uuId } = this.props;
    const data = e.target.checked
    handler && handler({ uuId, data });
  }
  render() {
    const { title = 'item', disabled = false, defaultChecked = false } = this.props;
    return (
      <div>
        <Checkbox
          onChange={this.onChange}
          disabled={disabled}
          defaultChecked={defaultChecked}
        >{title}</Checkbox>
      </div>
    )
  }
}
