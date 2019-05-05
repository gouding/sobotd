import React, { PureComponent } from 'react'
import { ZcSelect } from '../../../../src';
import styles from '../components.less'
import ReactMarkdown from 'react-markdown'
export default () => {
  const list = [
    {
      name: '构子哥',
      value: '1',
    }, {
      name: '小丁哥',
      value: '2',
    }, {
      name: '小板凳',
      value: '3'
    },
  ]
  const onSelectHandler = ({ uuId, data }) => {
    console.log(uuId, data);
  }
  const md = `
    //注：有回调输出时可查看console控制台
  #### import {ZcSelect} from 'sobotd'
    const list = [
      {
        name: '构子哥',
        value: '1',
      }, {
        name: '小丁哥',
        value: '2',
      }, {
        name: '小板凳',
        value: '3'
      },
    ]
    //默认支持搜索功能
    <ZcSelect
      width={330} // 宽度
      list={list} // 下拉框中的数据
      multiple={true} // 是否支持多选
      defaultValue={'选择你想所选'} //指定默认选中的条目
      uuId='select' // 组件id
      handler={onSelectHandler} //选择下拉选项时的回调
      disabled={false}  //是否要下拉选择
      placeholder=''  //默认显示的提示文案
      parent='parentId' //菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位
    />
  `
  return (
    <div className='container'>
      <div className='preview'>
        <div className='box'>
          <ZcSelect
            width={330}
            style={{border:'1px solid red'}}
            list={list}
            multiple={true}
            defaultValue={'选择你想所选'}
            uuId='select'
            handler={onSelectHandler}
          ></ZcSelect>
        </div>
        <div className='box'>
          <ZcSelect
            width={330}
            list={list}
            multiple={false}
            defaultValue={'选择你想所选'}
            uuId='select'
            handler={onSelectHandler}
          ></ZcSelect>
        </div>
      </div>
      <div className='codeBox'>
        <ReactMarkdown source={md} />
      </div>
    </div>
  )
}