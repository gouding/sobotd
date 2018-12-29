import React from 'react'
import { Route, Link } from 'react-router-dom'
import styles from './index.less'
//菜单
const menus = [
  { name: 'Button 按钮', id: '001', path: '/button', active: false },
  { name: 'Input 输入框', id: '002', path: '/input', active: false },
  { name: 'CheckBox 复选框', id: '003', path: '/checkbox', active: false },
  { name: 'Radio 单选框', id: '004', path: '/radio', active: false },
  { name: 'Modal 弹层', id: '005', path: '/modal', active: false },
  { name: 'Alert 弹层', id: '006', path: '/alert', active: false },
]

const onSwitch = (path) => {
  menus.forEach(item => {
    item.active = item.path === path;
  })
}
const Menu = () => {
  const hash = window.location.hash.substr(1);
  onSwitch(hash);
  return (
    <div className={styles.menu}>
      <ul>
        {
          menus.map(item => (
            <li key={item.id} className={item.active ? styles.active : ''}>
              <Link to={item.path} >{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Menu