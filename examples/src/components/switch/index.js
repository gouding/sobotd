import React from 'react'
import { ZcSwitch } from '../../../../src'
import ReactMarkdown from 'react-markdown'
import styles from './index.less'

export default function () {
  const onSwitch = ({ uuId, data }) => {
    console.log(uuId, data)
  }
  const md = `
    //注：有回调输出时可查看console控制台
  ####  引入：import {ZcSwitch} from 'sobotd'
  <ZcSwitch\n
      size='small'  //默认为default或不用设置  可选值 small 表示小号开关
      uuId='switch' //被操作的组件id
      tips={['1', '0']} //默认不设置 或可自定义，此处必须是数组
      handler={onSwitch}  //选择后的回调
      defaultChecked={false}  //默认为开启，开关的默认状态
  />
  `
  return (
    <div>
      <div className={styles.preview}>
        <ZcSwitch
          size='small'
          tips={['1', '0']}
          handler={onSwitch}
          uuId='switch1'
          defaultChecked={false}
        />
        <ZcSwitch
          tips={['开', '关']}
          handler={onSwitch}
          uuId='switch2'
          defaultChecked={true}
        />
        <ZcSwitch
          handler={onSwitch}
          uuId='switch3'
          defaultChecked={true}
        />
      </div>
      <div className={styles.codeBox}>
        <ReactMarkdown source={md} />
      </div>
    </div>
  )
}