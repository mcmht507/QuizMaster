import React from 'react'

import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Avatar, Card, CardContent, Button, TextField } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Email } from 'material-ui-icons'
import { Field, reduxForm } from 'redux-form'
import { error } from 'util';

const FormTextField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  const isError = !!(touched && error)
  return (
    <TextField style={{ margin: 5, width:'90%' }} error={isError} label={label} helperText={isError ? error : null} {...input} type={type} />
  )
}

@reduxForm({
  form: 'syncValidation',
  validate: values => {
    const requiredErrMsg = '{0} is is a required filed'
    // 入力変更時にパラメータが渡ってくる
    const errors = {}
    if (!values.userid) {
      errors.userid = requiredErrMsg.replace("Userid")
    }
    if (!values.name) {
      errors.name = 'Required name'
    }
    if (!values.email) {
      errors.email = 'Required email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email field'
    }
    if (!values.password) {
      errors.password = 'Required password field'
    } else if (!values.password.match(/^[A-Za-z0-9]*$/ === false)){
      errors.password = 'Required name field'
    } else if (password.length === 8){
      errors.password = 'Required name field'
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
      firstname: values.firstname,
      lastname: values.lastname,
      gender: values.gender || 'male',
      email: values.email
    }
    // redux-connectで送信処理などする
    //this.props.add(user).then( () => alert('送信完了')) 
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
              <Field name="userid" type="text" component={FormTextField} label="userid" />
              <Field name="name" type="text" component={FormTextField} label="name" />
              <Field name="email" type="email" component={FormTextField} label="email" />
              <Field name="password" type="password" component={FormTextField} label="pasword(※8 characters and alphameric characters)" />
              <br/>
            <Button style={{ marginTop: 20, "text-transform": 'capitalize'  }} color="primary" raised type="submit" disabled={submitting}>Sign Up</Button>
            </div>
          </form>
      </div>
    )
  }
}