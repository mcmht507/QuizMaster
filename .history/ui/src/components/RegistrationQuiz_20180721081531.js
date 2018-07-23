import React from 'react'
import { connect } from 'react-redux';
import { Button, TextField } from 'material-ui'
import { Field, reduxForm } from 'redux-form'
// import { error } from 'util';
import { Editor } from '@tinymce/tinymce-react';
import { load } from '../reducers/question'
import QuizMasterHeader from './QuizMasterHeader'
import CategoryList from './CategoryList'
import client from '../common/Client'
import { requiredErrMsg } from '../common/Const'

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
  enableReinitialize: true,
  validate: values => {
    const errors = {}
    if (!values.category) {
      console.log("err category");
      errors.category = requiredErrMsg.replace("{0}", "Category")
    }
    if (!values.answer) {
      console.log("err answer");
      errors.answer = requiredErrMsg.replace("{0}", "Answer")
    }
    return errors
  },
})

@connect(
  state => ({
    question: state.question.questions,
    result: state.question.result
  }),
  { load }
)

export default class RegistrationQuiz extends React.Component {

  constructor(props) {
    super(props);
    this.sendItems = this.sendItems.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.state = {
      question_content: null,
      history: this.props.history,
      question_label: "miyoshi"
    };
    this.ansInput = null;
    this.setAnsRef = element => {
      this.ansInput = element;
    };

    this.getAnswer = () => {
      return this.ansInput ? this.ansInput.value : ""
    };
  }

  handleEditorChange(content) {
    this.setState({ question_label:""})
    this.setState({ question_content: content });
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  componentDidMount() {
    this.props.load(this.state.question_id)
  }

  sendItems(values) {
    // question check
    console.log("sousin");
    console.log(this.state);
    if (!this.state.question_content) {
      console.log("input check question");
      this.setState({ question_label :requiredErrMsg.replace("{0}", "Question")})
      return;
    }
    const question = {
      content: values.questionContent,
      answer: values.answer,
      category_id: values.category
    }
    // register
    client.post("http://localhost:3000/questions/", { question: question })
      .then((res) => {
        let result = res.data;
        this.handlePageMove('/manage');
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
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center' }}>
              <label style={{ marginRight: 5 }}>Question：</label>
              <Editor
                name="questionContent"
                onEditorChange={this.handleEditorChange}
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
            <label style={{color:"#f00"}}>{this.state.question_label}</label>
            <div style={{ marginRight: 10 }}>
              <label style={{ marginRight: 5 }}>Answer：</label>
              <Field name="answer" type="text" ref={this.setAnsRef} component={FormTextField} />
            </div>
            <Button style={{ marginTop: 20, "textTransform": 'capitalize' }} color="primary" type="submit" disabled={submitting}>Register</Button>
          </div>
        </form>
      </div>
    )
  }
}