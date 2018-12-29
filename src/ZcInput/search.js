import React from 'react'
import { Input } from 'antd'
const Search = Input.Search;
export default function (props) {
  const { data } = props;
  const { enterButton, placeholder, size, handler, uuId, width, style, modify } = data
  const onStyles = () => {
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
  const onSearch = (data) => {
    handler && handler({ uuId, data })
  }
  return (
    <div>
      <Search
        size={size}
        placeholder={placeholder}
        onSearch={onSearch}
        enterButton={enterButton}
        style={onStyles()}
      />
    </div>
  )
}