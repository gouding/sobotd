import React from 'react'
import { ZcCheckbox } from '../../../../src';
import styles from './index.less'
import ReactMarkdown from 'react-markdown'

const FieldsCheckbox = ZcCheckbox.FieldsCheckbox;

const ZCheckbox = (props) => {
  const fieldItems=[
    {
      name: 'item1',
      value: 'val1',
      checked: false,
      disabled: false,
      default:false,
      sortFlag: true,
      sortName: 'val1',
      sortType: ''
    },{
      name: 'item2',
      value: 'val2',
      checked: true,
      disabled: false,
      default:true,
      sortFlag: true,
      sortName: 'val2',
      sortType: ''
    },{
      name: 'item3',
      value: 'val3',
      checked: true,
      disabled: true,
      default:true,
      sortFlag: true,
      sortName: 'val3',
      sortType: ''
    }
  ]
  const onChecked = ({ uuId, data }) => {
    console.log(uuId, data)
  }
  const onFieldsChecked=({uuId,type,data})=>{
    console.log(uuId,type,data);
  }
  const md = `
  ####  引入：import {ZcCheckbox} from 'sobotd'
  
   <ZcCheckbox \n
      uuId='id1'
      defaultChecked={false}    //默认是否选中
      title='选项一'  //单选框文案
      disabled={false}  //默认是否禁用状态
      handler={onChecked} //单选框状态改变时的回调
  />

  const onChange=({uuId,data})=>{ \n
      console.log(uuId,data) //uuId,为当前操作的组件id,data为回传的值
  }

  #### 若要使用自定义字段
  import {ZcCheckbox} from 'sobotd' \n
  const FieldsCheckbox = ZcCheckbox.FieldsCheckbox;\n
  //默认字段的初始值 \n
  const fieldItems=[ \n
    {
      name: 'item1',
      value: 'val1',
      checked: false,
      disabled: false,
      default:false,
      sortFlag: true,
      sortName: 'val1',
      sortType: ''
    },{
      ...
    }
  ]\n
  const onFieldsChecked=({uuId,type,data})=>{\n
    //[uuId]  被操作的组件id  
    //[type]  点击的按钮类型 ensure 表示点击的为确定   cancle表示点击的为取消按钮  
    //[data]  为回传选中数据
    console.log(uuId,type,data);
  }\n
  <FieldsCheckbox  \n
      data={fieldItems}
      uuId={'field'}
      handler={onFieldsChecked}
  />
  `
  return (
    <div >
      <div className={styles.wrap}>
        <ZcCheckbox
          uuId='id1'
          defaultChecked={true}
          title='选项一'
          disabled={false}
          handler={onChecked}
        />
         <ZcCheckbox
          uuId='id2'
          defaultChecked={false}
          title='选项二'
          disabled={false}
          handler={onChecked}
        />
        <ZcCheckbox
          uuId='id3'
          defaultChecked={false}
          title='选项三'
          disabled={true}
          handler={onChecked}
        />
        <ZcCheckbox
          uuId='id4'
          defaultChecked={true}
          title='选项四'
          disabled={true}
          handler={onChecked}
        />
        <div>
            <FieldsCheckbox 
              data={fieldItems}
              uuId={'field'}
              handler={onFieldsChecked}
            />
        </div>
      </div>
      <div className={styles.codeBox}>
        <ReactMarkdown source={md} />
      </div>
    </div>
  )
}
export default ZCheckbox