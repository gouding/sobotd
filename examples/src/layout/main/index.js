import React from 'react'
import { Switch, Route } from 'react-router-dom'
import router from '../router'
import styles from './index.less'
import ZcIndex from '../../components/index'


const onRoute = () => {
  return router.map((item, i) => (
    <Route key={i} path={item.path} component={item.component} />
  ))
}
const Main = () => (
  <div className={'main'}>
    <Switch>
      <Route exact path="/" component={ZcIndex} />
      {onRoute()}
    </Switch>
  </div>
)

export default Main