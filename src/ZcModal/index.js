import { Modal, LocaleProvider, message } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { ZcBtn, ZcTextBtn, } from '../index'
import styles from './index.less'
import React from 'react'
export default (props) => {
  const { visible, handler, title, children, okText = '确定', cancleText = '取消', width = 500, maskClosable = true, destroyOnClose = false, footerFlag = true, closable = true, } = props;
  const handleOk = (e) => {
    handler && handler(e,true)
  }

  const handleCancel = (e) => {
    handler && handler(e,false)
  }
  return (
    <LocaleProvider locale={zhCN}>
      <Modal
        title={title}
        visible={visible}
        width={width}
        maskClosable={maskClosable}
        destroyOnClose={destroyOnClose}
        onOk={handleOk}
        closable={closable}
        onCancel={handleCancel}
        footer={footerFlag ? [
          <ZcBtn title={okText} size="default" type='o' handler={handleOk} key={1} />,
          <ZcTextBtn title={cancleText} size="default" handler={handleCancel} key={2} />,
        ] : null}
      >
        {children}
      </Modal>
    </LocaleProvider>
  )
}

const ZcSuccess = (props, cbk) => {
  const { title = '提示', okText = '知道了', content } = props;
  Modal.success({
    title: title,
    content: (
      <div>
        {content}
      </div>
    ),
    okText,
    onOk() {
      cbk && cbk();
    },
  });
}
const ZcWarning = (props, cbk) => {
  const { title = '提示', okText = '知道了', content } = props;
  Modal.warning({
    title: title,
    content: (
      <div>
        {content}
      </div>
    ),
    okText,
    onOk() { cbk && cbk() },
  });
}
const ZcError = (props, cbk) => {
  const { title = '提示', okText = '知道了', content } = props;
  Modal.error({
    title: title,
    content: (
      <div>
        {content}
      </div>
    ),
    okText,
    onOk() { cbk && cbk() },
  });
}

const ZcAlert = (props, ) => {
  const { content, type } = props;
  message[`${type}`](content)
}

export { ZcError, ZcSuccess, ZcWarning, ZcAlert, }