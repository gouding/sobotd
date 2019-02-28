import React, { PureComponent } from 'react'
import { ZcTabs } from '../../../../src';
import styles from '../components.less'
import ReactMarkdown from 'react-markdown'
const onTab = (tab) => (
  <div className={styles.content}>{`这是tab的内容`}</div>
)
export default () => {
  const items = [
    {
      name: 'Tab1',
      content: onTab,
    },
    {
      name: 'Tab2',
      content: onTab,
    },
  ]
  const onChange = (e) => {
    console.log(e)
  }
  const md = `
    //注：有回调输出时可查看console控制台
  #### import {ZcTabs} from 'sobotd'
    const onTab = (tab) => (
      <div className={styles.content}>{这是tab的内容}</div>
    )
    const items = [
      {
        name: 'Tab1',
        content: onTab(1),  //注意：content的值必须为一个组件才可以！
      },
      {
        name: 'Tab2',
        content: onTab(2),
      },
    ]
    const onChange =(e)=>{
      console.log(e)
    }
    <ZcTabs
      items={items} //tabs菜单
      type='card' //tabs类型 默认不设置
      uuId='tabs' //组件id
      handler={onChange}  //点击tab的回调
    />
  `
  return (
    <div className='container'>
      <div className='preview'>
        <ZcTabs
          items={items}
          uuId='tabs'
          handler={onChange}
        />
      </div>
      <div className='codeBox'>
        <ReactMarkdown source={md} />
      </div>
    </div>

  )
}