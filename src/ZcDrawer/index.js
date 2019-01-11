import React, { PureComponent } from 'react'
import { Drawer } from 'antd'
import styles from './index.less'
export default class ZcDrawer extends PureComponent {
  state = {
    visible: this.props.visible,
  }

  onClose = () => {
    const { handler } = this.props;
    this.setState({
      visible: false,
      height: 0,
    });
    handler && handler();
  };
  render() {
    const { width, children, title, maskClosable = true, closable, zIndex = 1000, maskStyle, } = this.props
    return (
      <div>
        <Drawer
          title={title}
          placement="right"
          closable={false}
          onClose={this.onClose}
          width={width}
          destroyOnClose={true}
          maskClosable={maskClosable}
          visible={this.props.visible}
          closable={closable}
          maskStyle={maskStyle}
          zIndex={zIndex}
          className={'zcLayerMask'}
        >
          {children}
        </Drawer>
      </div>
    )
  }
}