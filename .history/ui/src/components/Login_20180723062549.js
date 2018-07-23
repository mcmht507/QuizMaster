import React from 'react'

import { Button, TextField } from 'material-ui'
import { Field, reduxForm } from 'redux-form'
import QuizMasterHeader from './QuizMasterHeader'
import client from '../common/Client'
import { requiredErrMsg, invalidErrMsg, formatErrMsg, numberOFDigitsErrMsg } from '../common/Const'

const FormTextField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  const isError = !!(touched && error)
  return (
    <TextField style={{ margin: 5, width: '90%' }} error={isError} label={label} helperText={isError ? error : null} {...input} type={type} />
  )
}

@reduxForm({
  form: 'syncValidation',
  validate: values => {
    const errors = {}
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
export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.sendItems = this.sendItems.bind(this) // sendItemsメソッド内でthisを使えるようにbindする
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  sendItems(values) {
    const user = {
      email: values.email,
      password: values.password
    }
    // register
    client.post("http://localhost:3000/login", user)
      .then(res => res.data)
      .then((user) => {
        localStorage.setItem('access_token', user.access_token);
        this.handlePageMove(user.role_type === 'admin' ? '/manage' : '/quiz');
      })
      .catch((err) => {
        if (err.response.status === 400){
          alert('Invalid Email or Password');
        } else {
          alert('Sever Error');
        }
      })
  }

  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <div>
        <QuizMasterHeader history={this.props.history} />
        <form onSubmit={handleSubmit(this.sendItems)} style={{ textAlign: 'center' }}>
          <div>
            <Field name="email" type="email" component={FormTextField} label="email" />
            <Field name="password" type="password" component={FormTextField} label="pasword(※8 characters and alphameric characters)" />
            <br />
            <Button style={{ marginTop: 20, "textTransform": 'none' }} color="primary" type="submit" disabled={submitting}>Sign In</Button>
            <hr width="100" />
            <Button style={{ marginTop: 20, "textTransform": 'none', marginTop: "20" }} color="primary" type="submit" onClick={() => this.handlePageMove("/register")}>Create Account</Button>
          </div>
        </form>

      </div>
    )
  }
}