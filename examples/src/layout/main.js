import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ZcButton from '../components/button'
import ZcIndex from '../components/index'


const Main = () => (
  <div className="main">
      <Switch>
        <Route exact path="/" component={ZcIndex} />
        <Route path="/button" component={ZcButton} />
      </Switch>
  </div>
)

export default Main