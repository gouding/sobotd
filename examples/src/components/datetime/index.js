import React from 'react'
import { ZcDateTime } from '../../../../src';
import styles from '../components.less'
import ReactMarkdown from 'react-markdown'
export default () => {
  const onChange = ({ uuId, data }) => {
    console.log(uuId, data);
  }
  const md = `
    //注：有回调输出时可查看console控制台
  #### import {ZcDateTime} from 'sobotd'
    const onChange = ({ uuId, data }) => {
      console.log(uuId, data);
    }
    <ZcDateTime
      handler={onChange}  //选择日期后的回调
      zcShowTime={false}  //是否显示时间 eg: YYYY-MM-DD HH:mm:ss  若为false则返回格式为YYYY-MM-DD的格式
      uuId='datetime' //组件id
      zcPickerModel={'range'} //date 单个日期控件   range 有开始日期和结束日期
    />
  `
  return (
    <div className='container'>
      <div className='prview'>
        <ZcDateTime
          handler={onChange}
          zcShowTime={false}
          uuId='datetime'
          zcPickerModel={'range'}
        />
      </div>
      <div className='codeBox'>
        <ReactMarkdown source={md} />
      </div>
    </div>
  )
}