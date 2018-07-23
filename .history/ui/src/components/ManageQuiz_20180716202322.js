import React from 'react'
import QuizMasterHeader from './QuizMasterHeader'
import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Avatar, Card, CardContent, Button, TextField } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Email } from 'material-ui-icons'
import { Field, reduxForm } from 'redux-form'
import { error } from 'util';
import Client from '../common/Client'
import getLoginUser from "../common/UtilsFunc";

const LoginUser = getLoginUser();

export default class TodoPage extends React.Component {

  constructor(props) {
    super(props)
    this.sendItems = this.sendItems.bind(this) // sendItemsメソッド内でthisを使えるようにbindする
    if (LoginUser === null) {
      this.props.history.push("path")
    }
    // setting user
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