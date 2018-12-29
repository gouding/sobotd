import React from 'react'
import ZcInput from '../../../../src/ZcInput'

const inputChange = (e) => {
  console.log(e.target.value)
}
const InputDemo = () => (
  <div>
    <ZcInput
      width={169}
      placeholder={'0'}
      addonAfter={'条'}
      handler={inputChange}
      uuId={'customerMessageValue'}
    ></ZcInput>
  </div>
)
export default InputDemo