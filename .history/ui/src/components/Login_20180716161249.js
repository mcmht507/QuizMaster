import React from 'react'

import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Avatar, Card, CardContent, Button, TextField } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Email } from 'material-ui-icons'
import { Field, reduxForm } from 'redux-form'
import { error } from 'util';
import client from 'axios'


const FormTextField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  const isError = !!(touched && error)
  return (
    <TextField style={{ margin: 5, width: '90%' }} error={isError} label={label} helperText={isError ? error : null} {...input} type={type} />
  )
}

@reduxForm({
  form: 'syncValidation',
  validate: values => {
    const requiredErrMsg = '{0} is a required filed'
    const invalidErrMsg = '{0} is invalid Value'
    const formatErrMsg = '{0} is alphanumeric characters'
    const numberOFDigitsErrMsg = '{0} is {1} characters'
    // 入力変更時にパラメータが渡ってくる
    const errors = {}
    if (!values.user_id) {
      errors.user_id = requiredErrMsg.replace("{0}", "Userid")
    }
    if (!values.name) {
      errors.name = requiredErrMsg.replace("{0}", "Name")
    }
    if (!values.email) {
      errors.email = requiredErrMsg.replace("{0}", "Email")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = invalidErrMsg.replace("{0}", "Email")
    }
    if (!values.password) {
      errors.password = 'Required password field'
    } else if (!/^[A-Z0-9]*$/i.test(values.password)) {
      errors.password = formatErrMsg.replace('{0}', 'Password');
    } else if (values.password.length !== 8) {
      errors.password = numberOFDigitsErrMsg.replace('{0}', 'Password').replace('{1}', '8');
    }
    return errors
  }
})
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
    console.log(user);
    
    // redux-connectで送信処理などする
    client.post("http://localhost:3000/users",{user: user}, { headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }})
      .then(() => {
        console.log('通信成功');
      })
      .catch((err) => {
        console.log(err);
        alert('Sever Error');
        // 下記'pass'の部分は任意のフォームのnameを入れる
      })
    // this.props.add(user).then( () => alert('送信完了'))
  }

  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              Quiz Master!
            </Typography>
            <Button style={{ color: '#fff', position: 'absolute', top: 15, right: 0 }} onClick={() => this.handlePageMove('/')}>ユーザページへ</Button>
          </Toolbar>
        </AppBar>
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