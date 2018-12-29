import React from 'react'
import Header from './header'
import Main from './main'
import Menu from './menu'
import styles from './index.less'


const Layout = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Menu />
        <Main />
      </div>
    </div>
  )
}

export default Layout
