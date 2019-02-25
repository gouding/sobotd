import React, { PureComponent } from 'react'
import { ZcModal, ZcBtn } from '../../../../src';
import styles from '../components.less'
import ReactMarkdown from 'react-markdown'
const { alert } = ZcModal;
export default class ZModal extends PureComponent {
  state = {
    visible: false,
  }
  onChange = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }
  onModalChange = (e) => {
    this.setState({
      visible: !this.state.visible,
    })
    console.log(`你点击了${e.target.textContent}按钮`)
  }
  onInfoChange = (type) => {
    ZcModal[`${type}`]({
      title: '这是提示语',
      okText: '确定',
      content: '这是提示内容'
    }, () => {
      console.log('你点击了按钮')
    })
  }
  alertForSuccess = () => {
    alert({
      type: 'success',
      content: '这是一条全局的提示语',
    })
  }
  alertForWaring = () => {
    alert({
      type: 'warning',
      content: '这是一条全局的提示语',
    })
  }
  alertForError = () => {
    alert({
      type: 'error',
      content: '这是一条全局的提示语',
    })
  }
  render() {
    const { visible } = this.state;
    const md = `
    //注：有回调输出时可查看console控制台
  #### 引入：import {ZcModal} from 'sobotd'
    state = {
      visible: false,
    }
    onChange = () => {
      this.setState({
        visible: !this.state.visible,
      })
    }
    onModalChange = (e) => {
      this.setState({
        visible: !this.state.visible,
      })
      console.log("你点击了确定按钮")
    }
    
    <ZcModal
      visible={visible}   //弹层是否可见
      width={500}     //弹层的宽度
      title='提示语'  //弹层提示语
      maskClosable={true} //点击蒙层是否允许关闭
      okText='确定' //确定按钮文案
      cancleText='取消' //取消按钮文案
      footerFlag={true} //是否显示底部的按钮
      closable={true} //是否显示右上角的关闭按钮
      handler={this.onModalChange}  //点击按钮后的回调
    >
      <div>这是子组件</div>
    </ZcModal>

  #### 若要使用仅做提示的弹层
  #### const { success, error, warning } = ZcModal;
    onSuccessInfo=()=>{
      success({
        title: '这是提示语',
        okText: '确定',
        content: '这是提示内容'
      }, (e) => {
        console.log('你点击了按钮')
      })
    }
    onWarningInfo=()=>{
      warning({
        title: '这是提示语',
        okText: '确定',
        content: '这是提示内容'
      }, (e) => {
        console.log('你点击了按钮')
      })
    }
    onErrorInfo=()=>{
      error({
        title: '这是提示语',
        okText: '确定',
        content: '这是提示内容'
      }, (e) => {
        console.log('你点击了按钮')
      })
    }
    <ZcBtn title='modal弹层 success提示' handler={this.onSuccessInfo} />
    <ZcBtn title='modal弹层 waring提示' handler={this.onWarningInfo} />
    <ZcBtn title='modal弹层 error提示' handler={this.onErrorInfo} />
    ------
  #### 若要使用全局的提示弹层
  #### const { alert } = ZcModal;
      alertForSuccess = () => {
        alert({
          type: 'success',
          content: '这是一条全局的提示语',
        })
      }
      alertForWaring = () => {
        alert({
          type: 'warning',
          content: '这是一条全局的提示语',
        })
      }
      alertForError = () => {
        alert({
          type: 'error',
          content: '这是一条全局的提示语',
        })
      }
      <ZcBtn title='alert弹层 success提示' handler={this.alertForSuccess} />
      <ZcBtn title='alert弹层 waring提示' handler={this.alertForWaring} />
      <ZcBtn title='alert弹层 error提示' handler={this.alertForError} />
    `
    return (
      <div className='container'>
        <div className='preview'>
          <div className='box'>
            <ZcBtn title='modal弹层' handler={this.onChange} />
          </div>
          <div className='box'>
            <ZcBtn title='modal弹层 success提示' handler={() => { this.onInfoChange('success') }} />
            <ZcBtn title='modal弹层 waring提示' handler={() => { this.onInfoChange('warning') }} />
            <ZcBtn title='modal弹层 error提示' handler={() => { this.onInfoChange('error') }} />
          </div>
          <div className='box'>
            <ZcBtn title='alert弹层 success提示' handler={this.alertForSuccess} />
            <ZcBtn title='alert弹层 waring提示' handler={this.alertForWaring} />
            <ZcBtn title='alert弹层 error提示' handler={this.alertForError} />
          </div>
          <ZcModal
            visible={visible}
            title='提示语'
            maskClosable={true}
            handler={this.onModalChange}
          >
            <div>这是子组件</div>
          </ZcModal>
        </div>
        <div className='codeBox'>
          <ReactMarkdown source={md} />
        </div>
      </div>
    )
  }
}