import React from 'react'
import Header from './header'
import Main from './main'
import Menu from './menu'
import styles from './index.less'


const Layout = () => {
  return (
    <div className={'wrap'}>
      <div className={'header'}>
        <Header />
      </div>
      <div className={'content'}>
        <Menu />
        <Main />
      </div>
    </div>
  )
}

export default Layout
