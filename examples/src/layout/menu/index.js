import React from 'react'
import { Route, Link } from 'react-router-dom'
import styles from './index.less'
import router from '../router';

const onSwitch = (path) => {
  router.forEach(item => {
    item.active = item.path === path;
  })
}
const Menu = () => {
  const hash = window.location.hash.substr(1);
  onSwitch(hash);
  return (
    <div className={'menu'}>
      <ul>
        {
          router.map(item => (
            <li key={item.id} className={item.active ? 'active' : ''}>
              <Link to={item.path} >{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Menu