import { ZcBtn, ZcDelBtn, ZcTimeBtn, ZcEditBtn, ZcMoveBtn, ZcOpenBtn, ZcAddBtn, ZcStopBtn, ZcCancleBtn, ZcTextBtn, ZcDownloadBtn } from '../../../../src';
import React from 'react';
import ReactMarkdown from 'react-markdown'
import styles from './index.less'
const onTouch = (e) => {
  alert(e.target.textContent);
}
const BtnDemo = (props) => {
  const md =
    `
  ####  引入：import {ZcBtn} from 'sobotd'
  <ZcBtn type='o' title='一般按钮' handler={onTouch} 
  /> \n
  <ZcBtn title='一般按钮' handler={onTouch} 
  />\n
  <ZcDelBtn  title='删除按钮' handler={onTouch} 
  />\n
  <ZcTimeBtn  title='时间按钮' handler={onTouch} 
  />\n
  <ZcEditBtn  title='编辑按钮' handler={onTouch} 
  />\n
  <ZcMoveBtn  title='移动按钮' handler={onTouch} 
  />\n
  <ZcOpenBtn  title='打开按钮' handler={onTouch} 
  />\n
  <ZcAddBtn  title='添加按钮' handler={onTouch} 
  />\n
  <ZcStopBtn  title='停止按钮' handler={onTouch} 
  />\n
  <ZcCancleBtn  title='删除按钮' handler={onTouch} 
  />\n
  <ZcTextBtn  title='取消按钮' handler={onTouch} 
  />\n
  <ZcDownloadBtn  title='导出按钮' handler={onTouch} 
  />\n

  属性|说明|类型|默认值 \r\n
  type|按钮底色|string|o \r\n
  size|按钮大小|string(small,default,large)|small \r\n
  title|按钮文案|string|确定 \r\n
  `;

  return (
    <div className={styles.wrap}>
      <span className={styles.title}>Button按钮 示例</span>
      <div className={styles.tempBox}>
        <ZcBtn type='o' size='small' title='一般按钮' handler={onTouch} />
        <ZcBtn title='一般按钮' handler={onTouch} />
        <ZcDelBtn title='删除按钮' handler={onTouch} />
        <ZcTimeBtn title='时间按钮' handler={onTouch} />
        <ZcEditBtn title='编辑按钮' handler={onTouch} />
        <ZcMoveBtn title='移动按钮' handler={onTouch} />
        <ZcOpenBtn title='打开按钮' handler={onTouch} />
        <ZcAddBtn title='添加按钮' handler={onTouch} />
        <ZcStopBtn title='停止按钮' handler={onTouch} />
        <ZcCancleBtn title='删除按钮' handler={onTouch} />
        <ZcTextBtn title='取消按钮' handler={onTouch} />
        <ZcDownloadBtn title='导出按钮' handler={onTouch} />
      </div>
      <div className={styles.codeBox}>
        <ReactMarkdown source={md} />
      </div>
    </div>
  )
}
export default BtnDemo