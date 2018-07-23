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
import { requiredErrMsg} from '../common/Const'

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
  enableReinitialize: true,
  validate: values => {
    const errors = {}
    if (!values.user_id) {
      errors.user_id = requiredErrMsg.replace("{0}", "Userid")
    }
    if (!values.name) {
      errors.name = requiredErrMsg.replace("{0}", "Name")
    }
    return errors
  },
})


// // connectのdecorator
@connect(
  // propsに受け取るreducerのstate
  state => ({
    question: state.question.questions,
    result: state.question.result
  }),
  { load }
)

export default class EditQuiz extends React.Component {

  constructor(props) {
    super(props)
    this.sendItems = this.sendItems.bind(this),
      this.state = {
        question: null,
        history: this.props.history,
        question_id: this.props.match.params.question_id
      }
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  componentDidMount() {
    this.props.load(this.state.question_id)
  }

  sendItems(values) {
    const question = {
      question_id: this.state.question_id,
      content: values.content,
      answer: values.answer,
      category_id: values.category_id
    }
    // register
    client.patch("http://localhost:3000/question", { question: question })
      .then((res) => {
        console.log("seikou");
      })
      .catch((err) => {
        console.log(err);
        alert('Sever Error');
      })
  }

  render() {
    const { question, handleSubmit, submitting } = this.props
    console.log(question);
    let category_id = "";
    let questionContent = "";
    if (question){
      category_id = question.category_id;
      questionContent = question.content;
      let initData = {
        category: category_id,
        content: questionContent,
        answer: question.answer
      }
      this.props.initialize(initData);
    }
    return (
      <div>
        <QuizMasterHeader history={this.props.history} />
        <form onSubmit={handleSubmit(this.sendItems)} style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
          <div>
            <CategoryList history={this.props.history} category_id={category_id} />
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center' }}>
              <label style={{ marginRight: 5 }}>Question：</label>
              <Editor
                name = "content"
                value = {questionContent}
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
                  statusbar: false,
                  relative_urls: false
                }}
              />
            </div>
            <label style={{ marginRight: 5 }}>Answer：</label>
            <Field name="answer" type="text" component={FormTextField}/>
            <br />
            <Button style={{ marginTop: 20, "textTransform": 'capitalize' }} color="primary" type="submit" disabled={submitting}>Update</Button>
          </div>
        </form>
      </div>
    )
  }
}