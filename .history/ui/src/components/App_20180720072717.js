import React from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Redirect, Switch } from 'react-router-dom'

import Registration from './Registration'
import NotFound from './NotFound'
import ManageQuiz from './ManageQuiz'
import EditQuiz from './EditQuiz'
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
    <Route exact path="/" component={Registration} />
    <Route exact path="/register" component={Registration} />
    <Route path="/manage" component={ManageQuiz} />
    <Route path="/editQuiz" component={EditQuiz} />
    <Route component={NotFound} />
  </Switch>
)