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