import React, { PureComponent } from 'react'
import { ZcDrawer, ZcBtn } from '../../../../src';
import styles from './index.less'
import ReactMarkdown from 'react-markdown'
export default class ZDrawer extends PureComponent {
  state = {
    visible: false,
  }
  onChange = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }
  onDrawerChange = () => {
    this.setState({
      visible: !this.state.visible,
    })
    console.log('点击了关闭按钮了...')
  }
  render() {
    const { visible } = this.state;
    const md = `
      //注：有回调输出时可查看console控制台
   ####  引入：import {ZcDrawer} from 'sobotd'
   state = {\n
      visible: false,
  }\n
  onChange = () => {\n
      this.setState({
        visible: !this.state.visible,
      })
  }\n
  onDrawerChange = () => {\n
      this.setState({
        visible: !this.state.visible,
      })
      console.log('点击了关闭按钮了...')
  }\n
   <ZcBtn title='确定' handler={this.onChange} />\n
      <ZcDrawer
        visible={visible} //弹层是否可见
        width={900} //弹层的宽度
        title='详情页弹层'  //弹层的标题
        handler={this.onDrawerChange} //点击遮罩层或右上角叉或取消按钮的回调
        maskClosable={true} //点击蒙层是否允许关闭
        closable={true}  //是否显示右上角的关闭按钮
        zIndex={1001} //设置 弹层 的 z-index
        maskStyle={{ top: 50 }} //弹层最外层的样式设置
      >
        <div>这里是子组件</div>
    </ZcDrawer>
   `
    return (
      <div>
        <div className={styles.wrap}>
          <ZcBtn title='确定' handler={this.onChange} />
          <ZcDrawer
            visible={visible}
            width={900}
            title={'详情页弹层'}
            handler={this.onDrawerChange}
            maskClosable={true}
            closable={true}
            zIndex={1001}
            maskStyle={{ top: 50 }}
          >
            <div style={{ background: '#fff', height: 200, padding: 20 }}>这里是子组件</div>
          </ZcDrawer>
        </div>
        <div className={styles.codeBox}>
          <ReactMarkdown source={md} />
        </div>
      </div>
    )
  }
}