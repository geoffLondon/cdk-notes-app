import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListNotesPage from './pages/list-notes-page'
import CreateNotePage from './pages/create-note-page'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/list-notes' component={ListNotesPage}/>
      <Route path='/' component={CreateNotePage}/>
    </Switch>
  </BrowserRouter>
)

export default Router
