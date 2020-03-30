import React from 'react'
import { ZcMenu } from '../../../../src'
export default () => {
  const menus = [
    {
      id: '0',
      name: '机器人管理',
      path: '/menu/1',
    },
    {
      id: '1',
      name: '统计',
      subFlag: true,
      items: [
        {
          id: '11',
          name: '机器人回答统计',
          path: '/menu/11',
        }, {
          id: '12',
          name: '客户提问统计',
          path: '/menu/12',
        }, {
          id: '13',
          name: '维护工作量统计',
          path: '/menu/13',
        }, {
          id: '14',
          name: '问题评价统计',
          path: '/menu/14',
        }, {
          id: '15',
          name: '机器人转人工统计',
          path: '/menu/15',
        }
      ]
    }, {
      id: '2',
      name: '知识库管理',
      path: 'robot2',
      subFlag: true,
      items: [
        {
          id: '21',
          name: '单轮问题管理',
          path: '/menu/123',
        }, {
          id: '22',
          name: '多轮问题管理',
          path: '/menu/1221',
        }, {
          id: '23',
          name: '智能学习',
          path: '/menu/121',
        }, {
          id: '24',
          name: '未知问题学习',
          path: '/menu/13',
        }, {
          id: '25',
          name: '自定义词库',
          groupFlag: true,
          items: [
            {
              id: '26',
              name: '寒暄问题',
              path: '/menu/1',

            },
          ]
        }
      ]
    }
  ]
  const handler = {
    click: data => {
      console.log(data)
    }
  }
  const payload = {
    title: '系统名称',
    menus,
    handler
  }
  return (
    <ZcMenu
      title="系统名称"
      {...payload}
    />
  )
}