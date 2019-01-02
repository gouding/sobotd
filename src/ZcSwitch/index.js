import React from 'react'
import { Switch } from 'antd'
export default function (props) {
  const { tips, defaultChecked, size = 'default', uuId, handler, } = props;
  let checkedTips, unCheckedTips;
  if (tips && tips.length > 0) {
    checkedTips = tips[0];
    unCheckedTips = tips[1];
  }
  const onChange = (data) => {
    handler && handler({ uuId, data })
  }
  return (
    <div>
      {
        tips && tips.length > 0 ?
          <Switch
            checkedChildren={checkedTips}
            unCheckedChildren={unCheckedTips}
            defaultChecked={defaultChecked}
            size={size}
            onChange={onChange}
          /> :
          <Switch defaultChecked={defaultChecked} size={size} onChange={onChange} />
      }

    </div>
  )
}