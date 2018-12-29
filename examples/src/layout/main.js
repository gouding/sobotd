import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ZcButton from '../components/button'
import ZcInput from '../components/input'
import ZcIndex from '../components/index'


const Main = () => (
  <div className="main">
      <Switch>
        <Route exact path="/" component={ZcIndex} />
        <Route path="/button" component={ZcButton} />
        <Route path="/input" component={ZcInput} />
      </Switch>
  </div>
)

export default Main