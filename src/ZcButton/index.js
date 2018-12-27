import styles from './index.css'
import React from 'react'
//普通的按钮
const ZcBtn = (props) => {
  //type o 表示实心 有底色  默为是无底色
  const { type, size = 'small', title = '确定', handler, } = props;
  const fn = (e) => {
    handler && handler(e);
  }
  return (
    <button type="button"
      onClick={fn}
      disabled
      className={`${size === 'small' ? 'small' : size === 'default' ? 'default' : 'large'} ${type === 'o' ? 'o' : ''} zcJBtn `} name="button">{title}</button>
  )
}

//一般按钮
const ZcTextBtn = (props) => {
  //type o 表示实心 有底色  默为是无底色
  const { size = 'small', title = '取消', handler } = props;
  const fn = e => {
    handler && handler(e);
  }
  return (
    <button type="button"
      onClick={fn}
      className={`zcJBtn ${size === 'small' ? 'small' : size === 'default' ? 'default' : 'large'} btnTextCancel `} name="button">{title}</button>
  )
}


//删除按钮
const ZcDelBtn = (props) => {
  const { title = '删除', handler } = props;
  const fn = e => {
    handler && handler(e);
  }
  return (
    <button type="button"
      onClick={fn}
      className={`zcJBtn btnDel btn`} name="button">{title}</button>
  )
}
//时间按钮
const ZcTimeBtn = (props) => {
  const { title = '时间', handler } = props;
  const fn = e => {
    handler && handler(e);
  }
  return (
    <button type="button"
      onClick={fn}
      className={`zcJBtn btnTime btn`} name="button">{title}</button>
  )
}
//编辑按钮
const ZcEditBtn = (props) => {
  const { title = '编辑', handler } = props;
  const fn = e => {
    handler && handler(e);
  }
  return (
    <button type="button"
      onClick={fn}
      className={`btnEdit zcJBtn btn`} name="button">{title}</button>
  )
}
//取消按钮
const ZcCancleBtn = (props) => {
  const { title = '取消', handler } = props;
  const fn = e => {
    handler && handler(e);
  }
  return (
    <button type="button"
      onClick={fn}
      className={`btnCancle zcJBtn btn`} name="button">{title}</button>
  )
}
//启用按钮
const ZcOpenBtn = (props) => {
  const { title = '启用', handler } = props;
  const fn = e => {
    handler && handler(e);
  }
  return (
    <button type="button"
      onClick={fn}
      className={` btnOpen zcJBtn btn`} name="button">{title}</button>
  )
}
//停用按钮
const ZcStopBtn = (props) => {
  const { title = '停用', handler } = props;
  const fn = e => {
    handler && handler(e);
  }
  return (
    <button type="button"
      onClick={fn}
      className={`btnStop zcJBtn btn`} name="button">{title}</button>
  )
}
//转移按钮
const ZcMoveBtn = (props) => {
  const { title = '转移', handler } = props;
  const fn = e => {
    handler && handler(e);
  }
  return (
    <button type="button"
      onClick={fn}
      className={`btnMove zcJBtn btn`} name="button">{title}</button>
  )
}
//增加按钮
const ZcAddBtn = (props) => {
  const { title = '增加', handler } = props;
  const fn = e => {
    handler && handler(e);
  }
  return (
    <button type="button"
      onClick={fn}
      className={`btnAdd zcJBtn btn`} name="button">{title}</button>
  )
}

const ZcDownloadBtn =(props)=>{
  const {title='下载',handler}=props;
  const fn = (e)=>{
    handler&&handler(e);
  }
  return (
    <button type="button"
      onClick={fn}
      className={'downloadBtn'} name="button">{title}</button>
  )
}



export { ZcBtn, ZcDelBtn, ZcTimeBtn, ZcEditBtn, ZcMoveBtn, ZcOpenBtn, ZcAddBtn, ZcStopBtn, ZcCancleBtn,ZcTextBtn,ZcDownloadBtn };