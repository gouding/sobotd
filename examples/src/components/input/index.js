import React from 'react'
import { ZcInput } from '../../../../src'

const inputChange = (e) => {
  console.log(e.target.value)
}
const onChange = ({ uuId, data }) => {
  console.log(uuId, data);
}
const InputDemo = () => (
  <div>
    <ZcInput
      size='default'
      addonBefore={'sdf'}
      addonAfter={'111'}
      placeholder={'你好22'}
      defaultValue={'你不好'}
      handler={onChange}
      style={{ color: 'red' }}
      disabled={false}
      uuId={'123'}
      modify='success'
      type='number'
      length={10}
      status="select"
      enterButton='123'
      width={400}
    ></ZcInput>

  </div>
)
export default InputDemo