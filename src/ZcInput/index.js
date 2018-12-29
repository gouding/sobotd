import React from 'react';
import ZInput from './input'
import ZSearch from './search'
import ZSelect from './select'
import ZTextarea from './textarea'

const ZcInput = (props) => {
  const { status } = props;

  const onSwitch = () => {
    switch (status) {
      case 'search':
        return <ZSearch data={props} />
      case 'select':
        return <ZSelect data={props} />
      case 'textarea':
        return <ZTextarea data={props} />
      default:
        return <ZInput data={props} />
    }
  }
  return (
    <div>
      {onSwitch()}
    </div>
  )
}
export default ZcInput