import React from 'react'
import { Menu } from 'antd';
import './index.less'

const { SubMenu } = Menu;
export default (props) => {
  let { title, menus = [], handler } = props
  // menus = [
  //   {
  //     id: '0',
  //     name: '机器人管理',
  //     path: 'xxx',
  //   }, {
  //     id: '1',
  //     name: '统计',
  //     path: '/robot1',
  //     subFlag: true,
  //     items: [
  //       {
  //         id: '11',
  //         name: '机器人回答统计',
  //         path: '/xxx',
  //       }, {
  //         id: '12',
  //         name: '客户提问统计',
  //         path: '/xxx',
  //       }, {
  //         id: '13',
  //         name: '维护工作量统计',
  //         path: '/xxx',
  //       }, {
  //         id: '14',
  //         name: '问题评价统计',
  //         path: '/xxx',
  //       }, {
  //         id: '15',
  //         name: '机器人转人工统计',
  //         path: '/xxx',
  //       }
  //     ]
  //   }, {
  //     id: '2',
  //     name: '知识库管理',
  //     path: 'robot2',
  //     subFlag: true,
  //     items: [
  //       {
  //         id: '21',
  //         name: '单轮问题管理',
  //         path: '/xxx',
  //       }, {
  //         id: '22',
  //         name: '多轮问题管理',
  //         path: '/xxx',
  //       }, {
  //         id: '23',
  //         name: '智能学习',
  //         path: '/xxx',
  //       }, {
  //         id: '24',
  //         name: '未知问题学习',
  //         path: '/xxx',
  //       }, {
  //         id: '25',
  //         name: '自定义词库',
  //         groupFlag: true,
  //         items: [
  //           {
  //             id: '26',
  //             name: '寒暄问题',
  //             path: 'xxx'
  //           }, {
  //             id: '27',
  //             name: '同义词',
  //             path: 'xxx'
  //           }, {
  //             id: '28',
  //             name: '专业名词',
  //             path: 'xxx'
  //           },
  //         ]
  //       }
  //     ]
  //   }
  // ]

  //分组菜单
  const onGroupMenu = (data) => {
    const { items, id, name } = data
    return (
      <Menu.ItemGroup key={id} title={name}>
        {
          items.map(item => <Menu.Item key={item.id}>{item.name}</Menu.Item>)
        }
      </Menu.ItemGroup>
    )
  }
  //二级菜单
  const onSubMenu = (data) => {
    const { items, id, name } = data
    return (
      <SubMenu
        key={id}
        title={<span>{name}</span>}
      >
        {
          items.map(item => {
            if (item.groupFlag) {
              //有分组
              return onGroupMenu(item)
            } else {
              return <Menu.Item key={item.id} >{item.name}</Menu.Item>
            }
          })
        }
      </SubMenu>
    )
  }
  //菜单
  const onMenu = () => {
    return menus.map(item => {
      if (item.subFlag) {
        return onSubMenu(item)
      } else {
        return <Menu.Item key={item.id}>{item.name}</Menu.Item>
      }
    })
  }
  const handleClick = (e) => {
    handler && handler(e)
    console.log(e)
  }
  return (
    <>
      <div className="menu-title">{title}</div>
      <Menu
        onClick={handleClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['0']}
        defaultOpenKeys={menus.map(item => item.id)}
        mode="inline"
        inlineIndent={20}
      >
        {onMenu()}
      </Menu>
    </>
  )
}

