import React from 'react'
import Header from './header'
import Main from './main'
import Menu from './menu'
import './index.css'


const Layout = () => {
  return (
    <div className='example-wrap'>
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Menu />
        <Main />
      </div>
    </div>
  )
}

export default Layout
