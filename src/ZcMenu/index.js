import React from 'react'
import { Menu } from 'antd';
import './index.less'

const { SubMenu } = Menu;
export default (props) => {
  let { title, menus = [], handler } = props

  //分组菜单
  const onGroupMenu = (data) => {
    const { items, id, name } = data
    return (
      <Menu.ItemGroup key={id} title={name}>
        {
          items.map(item => <Menu.Item key={item.id}>
            <a href={`#${item.path}`}>
              {item.name}
            </a>
          </Menu.Item>)
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
              return <Menu.Item key={item.id} >
                <a href={`#${item.path}`}>
                  {item.name}
                </a>
              </Menu.Item>
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
        return <Menu.Item key={item.id}>
          <a href={`#${item.path}`}>
            {item.name}
          </a>
        </Menu.Item>
      }
    })
  }
  const handleClick = (e) => {
    handler && handler.click && handler.click(e)
  }
  return (
    <div>
      <div className="menu-title">{title}</div>
      <Menu
        onClick={handleClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['0']}
        defaultOpenKeys={menus.map(item => item.id)}
        mode="inline"
        inlineIndent={20}
        {...props}
      >
        {onMenu()}
      </Menu>
    </div>
  )
}

