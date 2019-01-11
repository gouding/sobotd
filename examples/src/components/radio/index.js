import React from 'react'
import { ZcRadio } from '../../../../src'
import ReactMarkdown from 'react-markdown'
import styles from '../components.less'


const onChecked = ({ uuId, data }) => {
  console.log(uuId, data);
}
const ZRadio = () => {
  const data = [
    {
      name: 'item1',
      value: 1,
      disabled: false,
    }, {
      name: 'item2',
      value: 2,
      disabled: false,
    }, {
      name: 'item3',
      value: 3,
      disabled: true,
    },
  ]
  const defaultValue = 2;
  const md = `
    //注：有回调输出时可查看console控制台
  ####  引入：import {ZcRadio} from 'sobotd'
  const data = [\n
      {
        name: 'item1',
        value: 1,
        disabled: false,  //是否可选
      }, {
        name: 'item2',
        value: 2,
        disabled: false,
      }, 
    ]
  const defaultValue=2; //默认选中的value值 没有则不设 \n
  const onChecked = ({ uuId, data }) => {\n
      //[uuId]  被操作的组件id  
      //[data]  为回传选中数据
      console.log(uuId, data);
  }\n
  <ZcRadio \n
      data={data}
      uuId='radio'
      handler={onChecked}
      defaultValue={defaultValue}
  />
  `
  return (
    <div className='container'>
      <div className='preview'>
        <ZcRadio
          data={data}
          uuId='radio'
          handler={onChecked}
          defaultValue={defaultValue}
        />
      </div>
      <div className='codeBox'>
        <ReactMarkdown source={md} />
      </div>
    </div>
  )
}

export default ZRadio