import React, { PureComponent } from 'react'
import ReactDom, { render } from 'react-dom';
import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom'
import Layout from './layout'
render(
  <HashRouter>
    <Layout />
  </HashRouter>,
  document.getElementById('root')
)