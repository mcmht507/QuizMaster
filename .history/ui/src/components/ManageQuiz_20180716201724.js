import React from 'react'
import QuizMasterHeader from './QuizMasterHeader'
import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Avatar, Card, CardContent, Button, TextField } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Email } from 'material-ui-icons'
import { Field, reduxForm } from 'redux-form'
import { error } from 'util';
import Client from '../common/Client'
import getUser from "../common/UtilsFunc";

const User = getUser();

export default class TodoPage extends React.Component {

  constructor(props) {
    super(props)
    // getUser();
    this.sendItems = this.sendItems.bind(this) // sendItemsメソッド内でthisを使えるようにbindする
    if (User === null) {
      this.props.history.push("path")
    } else {
      "aaaaaaaaaa"
    }
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  sendItems(values) {
    const user = {
      user_id: values.user_id,
      name: values.name,
      email: values.email,
      password: values.password
    }
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
        <QuizMasterHeader username={"aaaaaaaaaaa"} />
      </div>
    )
  }
}