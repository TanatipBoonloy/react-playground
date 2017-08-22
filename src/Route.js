import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Switch, Route } from 'react-router'
import HomPage from 'pages/HomePage'
import About from 'pages/About'
import TodoList from 'pages/TodoList'
import history from './app-store/history'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={HomPage} />
      <Route path="/about" component={About} />
      <Route path="/todos" component={TodoList} />
    </Switch>
  </ConnectedRouter>
)

export default Routes
