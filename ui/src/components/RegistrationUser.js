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
export default class RegistrationUser extends React.Component {

  constructor(props) {
    super(props)
    this.sendItems = this.sendItems.bind(this)
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
    client.post("http://localhost:3000/users", { user: user })
      .then((res) => {
        let user = res.data;
        localStorage.setItem('access_token', user.access_token);
        window.location.href = (user.role_type === 'admin' ? '/manage' : '/quiz');
      })
      .catch((err) => {
        console.log(err);
        alert('Sever Error');
      })
  }

  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <div>
        <QuizMasterHeader history={this.props.history} />
        <form onSubmit={handleSubmit(this.sendItems)} style={{ textAlign: 'center' }}>
          <div>
            <Field name="user_id" type="text" component={FormTextField} label="user_id" />
            <Field name="name" type="text" component={FormTextField} label="name" />
            <Field name="email" type="email" component={FormTextField} label="email" />
            <Field name="password" type="password" component={FormTextField} label="pasword(※8 characters and alphameric characters)" />
            <br />
            <Button style={{ marginTop: 20, "textTransform": 'capitalize' }} color="primary" type="submit" disabled={submitting}>Sign Up</Button>
            <hr width="100" />
            <Button style={{ marginTop: 20, "textTransform": 'capitalize', marginTop: "20" }} color="primary" type="submit" onClick={() => this.handlePageMove("/")}>Sign In</Button>
          </div>
        </form>
      </div>
    )
  }
}