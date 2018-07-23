import React from 'react'
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Avatar, Card, CardContent, Button, TextField } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Email } from 'material-ui-icons'
import { Field, reduxForm } from 'redux-form'
import { error } from 'util';
import { Editor } from '@tinymce/tinymce-react';

import { load } from '../reducers/question'
import QuizMasterHeader from './QuizMasterHeader'
import CategoryList from './CategoryList'
import client from '../common/Client'



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

const style = {
  root: {
    background: "black"
  },
  input: {
    color: "white"
  }
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

// connectのdecorator
@connect(
  // propsに受け取るreducerのstate
  state => ({
    questions: state.question.questions,
    result: state.question.result,
  }),
  { load }
)

export default class Registration extends React.Component {

  constructor(props) {
    super(props)
    this.sendItems = this.sendItems.bind(this),
      this.state = {
        question: null,
        history: this.props.history
      }
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  sendItems(values) {
    const question = {
      user_id: values.user_id,
      name: values.name,
      email: values.email,
      password: values.password
    }
    // register
    client.post("http://localhost:3000/questiom", { user: user })
      .then((res) => {
        let user = res.data;
        localStorage.setItem('access_token', user.access_token);
        this.handlePageMove(user.role_type === 'admin' ? '/manage' : '/quiz');
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
        <form onSubmit={handleSubmit(this.sendItems)} style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
          <div>
            <CategoryList history={this.props.history} />
            <div style={{ marginTop:20 }}>
              <Editor
                apiKey="rjmdqspts9lz1p2mss4v5usuejb1svcgz9qnj9uli33ptnyn"
                init={{
                  menubar: false,
                  plugins: [
                    "textcolor advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table contextmenu paste"
                  ],
                  toolbar: [
                    "undo redo | formatselect | table | bold italic strikethrough | alignleft aligncenter alignright | fontsizeselect forecolor link"
                  ],
                  statusbar: false, // ステータスバーを隠す
                  relative_urls: false
                }}
              />
            </div>
            <br />
            <Button style={{ marginTop: 20, "textTransform": 'capitalize' }} color="primary" type="submit" disabled={submitting}>Update</Button>
          </div>
        </form>
      </div>
    )
  }
}