import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/user'

import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Avatar, Card, CardContent, Button, TextField } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Email } from 'material-ui-icons'
import { Field, reduxForm } from 'redux-form'
import { error } from 'util';
import Client from '../common/Client'
import getLoginUser from "../common/UtilsFunc";
import { log } from '../../node_modules/util';

// connectのdecorator
@connect(
  // propsに受け取るreducerのstate
  state => ({
    login_user: state.user.login_user,
    username: state.user.login_user && state.user.login_user.name
      ? state.user.login_user.name
      : null,
    result: state.user.result
  }),
  // propsに付与するactions
  { load }
)
export default class ManageQuiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      user: null,
    }
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  componentDidMount() {
    this.props.load()
  }

  render() {
    const { login_user, username } = this.props
    console.log(login_user);
    if (login_user && login_user.result === false) {
      this.props.history.push("/")
    }
    return (
      <div>
        <div>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography type="title" color="inherit">
                Quiz Master!
              </Typography>
              <Button style={{ color: '#fff', "textTransform": 'capitalize', position: 'absolute', top: 15, right: 0 }} onClick={() => this.handlePageMove('/')}>{username}</Button>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    )
  }
}