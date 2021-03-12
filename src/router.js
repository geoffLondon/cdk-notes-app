import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FrontPage from './pages/front-page'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={FrontPage}/>
    </Switch>
  </BrowserRouter>
)

export default Router
