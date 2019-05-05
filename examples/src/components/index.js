import React, { PureComponent } from 'react'
import { Timeline } from 'antd'
import moment from 'moment'

export default class ZIndex extends PureComponent {
  state = {
    current: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
  }
  timer;
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        current: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { current } = this.state;
    const style = {
      marginBottom: '20px',
      color: '#6d7894',
    }
    const box = {
      border: '1px solid #ddd',
      padding: '20px',
      width: '800px',
    }
    return (
      < div>
        <p style={style}>智齿UI组件开发更新周期时间轴</p>
        <p style={style}>当前时间：{current}</p>
        <div style={box}>
          <Timeline>
          <Timeline.Item>
              2019-05-05 sobotd v1.4.3 增加Select控制支持自定义 style 样式 
            </Timeline.Item>
            <Timeline.Item>
              2019-01-21 sobotd v1.2.3 修复Input组件设置默认值（defaultValue）不生效的bug
            </Timeline.Item>
            <Timeline.Item>
            2019-01-11 sobotd v1.2.2 修复组件加载不了内部的less文件，采用loader加载为module:true的模式，在第三方引用时，不能正常加载样式名，
            即使用正常的样式加载即可
            </Timeline.Item>
            <Timeline.Item>
              <div>
                2019-01-04 组件库完成v1.0版本的开发，可用于项目中进行正常使用。
          <p>
                  具体使用方法可参阅每个组件的导入方法
          </p>
              </div>
            </Timeline.Item>
            <Timeline.Item>2018-12-27 智齿UI组件库进行开发</Timeline.Item>
          </Timeline>
        </div>
      </div>
    )
  }
}