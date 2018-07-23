import React from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Redirect, Switch } from 'react-router-dom'

import Login from './Login'
import NotFound from './NotFound'
import UserPage from './UserPage'
import UserPage from './Manage'
import TodoPage from './TodoPage'

export default class App extends React.Component {
  render() {
    const { history } = this.props
    return (
      <Router history={history}>
        <Route component={AppRoute} />
      </Router>
    )
  }
}

const AppRoute = (props) => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/todo" component={TodoPage} />
    <Route path="/manage" component={TodoPage} />
    <Route component={NotFound} />
  </Switch>
)