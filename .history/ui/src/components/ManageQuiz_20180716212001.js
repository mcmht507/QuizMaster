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

// connectのdecorator
@connect(
  // propsに受け取るreducerのstate
  state => ({
    users: state.user.users
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
    console.log(LoginUser);
    this.state = { user: LoginUser }
    console.log(this.state.user);
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  sendItems(values) {
    // register
    // client.post("http://localhost:3000/users", { user: user },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     }
    //   })
    //   .then((res) => {
    //     let user = res.data;
    //     localStorage.setItem('access_token', user.access_token);
    //     this.handlePageMove(user.role_type === 'admin' ? '/manage' : '/quiz');
    //   })
    //   .catch((err, aaaaa) => {
    //     console.log(err);
    //     console.log(aaaaa);
    //     alert('Sever Error');
    //   })
  }

  render() {
    return (
      <div>
        <QuizMasterHeader username={""} />
      </div>
    )
  }
}