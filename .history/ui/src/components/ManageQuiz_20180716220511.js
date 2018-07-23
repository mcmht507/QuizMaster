import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/user'

import QuizMasterHeader from './QuizMasterHeader'
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
    username: state.user.login_user || "",
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
    // this.sendItems = this.sendItems.bind(this) // sendItemsメソッド内でthisを使えるようにbindする
  }


  componentWillMount() {
    this.props.load()

    // // loginUserCheck
    // if (LoginUser === null) {
    //   this.props.history.push("path")
    // }
    // setting user
    // console.log(LoginUser);
    // this.state = { user: LoginUser }
    // console.log(this.state.user);
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  render() {
    const {login_user} = this.props
    console.log(login_user);
    // longin redirect
    if (login_user && login_user.result === false){
      this.props.history.push("/")
    }
    let username = login_user && login_user.name ? login_user.name : "";
    console.log(username);
    
    return (
      <div>
        <QuizMasterHeader username={username} />
      </div>
    )
  }
}