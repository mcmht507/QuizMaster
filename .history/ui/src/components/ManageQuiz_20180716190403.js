import React from 'react'
import QuizMasterHeader from './QuizMasterHeader'
import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Avatar, Card, CardContent, Button, TextField } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Email } from 'material-ui-icons'
import { Field, reduxForm } from '../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/redux-form'
import { error } from 'util';
import client from 'axios'

const getUser= () => {
  let token = localStorage.getItem("access_token")
  client.get("http://localhost:3000/user/myself", {},
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((res) => {
      let user = res.data;
      localStorage.setItem('access_token', user.access_token);
      this.handlePageMove(user.role_type === 'admin' ? '/manage' : '/quiz');
    })
    .catch((err, aaaaa) => {
      console.log(err);
      console.log(aaaaa);
      alert('Sever Error');
    })
}

export default class TodoPage extends React.Component {

  constructor(props) {
    super(props)
    this.sendItems = this.sendItems.bind(this) // sendItemsメソッド内でthisを使えるようにbindする
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
    client.post("http://localhost:3000/users", { user: user },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((res) => {
        let user = res.data;
        localStorage.setItem('access_token', user.access_token);
        this.handlePageMove(user.role_type === 'admin' ? '/manage' : '/quiz');
      })
      .catch((err, aaaaa) => {
        console.log(err);
        console.log(aaaaa);
        alert('Sever Error');
      })
  }

  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <div>
        <QuizMasterHeader username={"aaaaaaaaaaa"} />
        <form onSubmit={handleSubmit(this.sendItems)} style={{ textAlign: 'center' }}>
          <div>
            <Field name="user_id" type="text" component={FormTextField} label="user_id" />
            <Field name="name" type="text" component={FormTextField} label="name" />
            <Field name="email" type="email" component={FormTextField} label="email" />
            <Field name="password" type="password" component={FormTextField} label="pasword(※8 characters and alphameric characters)" />
            <br />
            <Button style={{ marginTop: 20, "textTransform": 'capitalize' }} color="primary" type="submit" disabled={submitting}>Sign Up</Button>
          </div>
        </form>
      </div>
    )
  }
}