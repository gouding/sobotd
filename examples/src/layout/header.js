import React from 'react'
import logo from '../zhichi-logo.png'
import { Link } from 'react-router-dom'
const Header = () => (
  <div>
    <Link to="/"><img src={logo} /></Link>
    <ul>
      <li>智齿UI-在线示例</li>
      <li><a href="https://www.sobot.com" target="_blank">智齿官网</a></li>
    </ul>

  </div >
)

export default Header;