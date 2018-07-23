import React from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Redirect, Switch } from 'react-router-dom'

import RegistrationUser from './RegistrationUser'
import NotFound from './NotFound'
import ManageQuiz from './ManageQuiz'
import RegistrationQuiz from './RegistrationQuiz'
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
    <Route exact path="/" component={RegistrationUser} />
    <Route exact path="/register" component={RegistrationUser} />
    <Route path="/manage" component={ManageQuiz} />
    <Route path="/registerQuiz" component={RegistrationQuiz} />
    <Route path="/editQuiz/:question_id" component={EditQuiz} />
    <Route component={NotFound} />
  </Switch>
)