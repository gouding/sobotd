import React from 'react'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane;
export default (props) => {
  const { items = [{ name: 'item', content: ()=>(<div>娃哈哈</div>) }], handler, uuId, type } = props;
  const cbk = (data) => {
    handler && handler({ uuId, data })
  }
  const onTabPanes = () => {
    return items.map((item, i) => (
      
      <TabPane key={i} tab={item.name} >
      {/* {item.content} */}
        <item.content />
      </TabPane>
    ))
  }
  return (
    <Tabs defaultActiveKey="0" onChange={cbk} type={type}>
      {onTabPanes()}
    </Tabs>
  )
}