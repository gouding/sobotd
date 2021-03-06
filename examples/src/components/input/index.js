import React from 'react'
import { ZcInput } from '../../../../src'
import ReactMarkdown from 'react-markdown'
import styles from '../components.less'
const inputChange = (e) => {
  console.log(e.target.value)
}
const onChange = ({ uuId, data }) => {
  console.log(uuId, data);
}
const md =
  `
    //注：有回调输出时可查看console控制台
  ####  引入：import {ZcBtn} from 'sobotd'
  
  <ZcInput \n
      size='default'
      placeholder={'请输入'}
      defaultValue={1}  //输入框默认内容
      handler={onChange} //输入框内容变化时的回调
      style={{ color: 'red' }}  //可二次对输入框进行样式修改 
      disabled={false}  //是否禁用状态，默认为 false
      uuId={'id1'}    //输入框组件id
      modify='success'  //输入框边框样式  默认为success  出错为error
      type='number'   //是否只能输入数字，后期会增加邮箱  手机号等的验证  不验证不添加该属性
      length={10}     //输入框可输入字符长度
      status="select" //输入框的当前渲染方式 默认为input   一共四种模式  即  input select textarea search
      enterButton='123' //当status=search时生效， 按钮的文案，不设置默认为搜索icon
      options={[{ name: '小丁哥', value: '001' }, { name: '小板凳', value: '002' }]}  //当status为“select”时的下拉框数据
      width={300} //输入框宽度
  />

  const onChange=({uuId,data})=>{ \n
      console.log(uuId,data) //uuId,为当前操作的组件id,data为回传的值
  }
  `;
const InputDemo = () => (
  <div className='container'> 
    <div className='preview'>
      <ZcInput
        size='default'
        placeholder={'请输入'}
        defaultValue='select内容'
        handler={onChange}
        style={{ color: 'red' }}
        disabled={false}
        uuId={'id1'}
        modify='success'
        type='number'
        length={10}
        status="select"
        enterButton='123'
        width={300}
        options={[{ name: '小丁哥', value: '001' }, { name: '小板凳', value: '002' }]}
      ></ZcInput>
      <div style={{ marginTop: '20px' }}>
        <ZcInput
          size='default'
          placeholder={'请输入'}
          defaultValue='hello'
          handler={onChange}
          style={{ color: 'red' }}
          disabled={false}
          uuId={'id2'}
          modify='success'
          length={20}
          status="search"
          enterButton='搜索'
          width={200}
        ></ZcInput>
         <ZcInput
          size='default'
          placeholder={'请输入'}
          defaultValue='hello'
          handler={onChange}
          style={{ color: 'red' }}
          disabled={false}
          uuId={'id2'}
          modify='success'
          length={20}
          status="search"
          enterButton='搜索'
          width={200}
        ></ZcInput>
      </div>
      <div style={{ marginTop: '20px' }}>
        <ZcInput
          size='default'
          placeholder={'请输入数字'}
          defaultValue='9999'
          handler={onChange}
          disabled={false}
          uuId={'id3'}
          type='number'
          modify='success'
          length={20}
          width={400}
        ></ZcInput>
      </div>
      <div style={{ marginTop: '20px' }}>
        <ZcInput
          size='default'
          placeholder={'请输入'}
          handler={onChange}
          disabled={true}
          uuId={'id4'}
          modify='success'
          length={20}
          width={400}
        ></ZcInput>
      </div>
      <div style={{ marginTop: '20px' }}>
        <ZcInput
          size='default'
          placeholder={'请输入'}
          defaultValue='textarea内容'
          handler={onChange}
          disabled={false}
          uuId={'id4'}
          modify='success'
          status='textarea'
          length={20}
          width={400}
        ></ZcInput>
      </div>
    </div>
    <div className='codeBox'>
      <ReactMarkdown source={md} />
    </div>
  </div>
)
export default InputDemo