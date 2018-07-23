import React from 'react'
import { connect } from 'react-redux';
import { Button, TextField } from 'material-ui'
import { Field, reduxForm } from 'redux-form'
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

const data = {
  answer:"aaaaaaa"
}

@reduxForm({
  form: 'syncValidation',
  enableReinitialize: true,
  // initialValues: data,
  keepDirtyOnReinitialize: true,
  validate: values => {
    const errors = {}
    console.log('✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿');
    console.log(values);
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


export default class EditQuiz extends React.Component {

  constructor(props) {
    super(props);
    this.sendItems = this.sendItems.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.state = {
      question_content: null,
      history: this.props.history,
      question_label: null,
      question_id: this.props.match.params.question_id,
      question: null,
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
    console.log('〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠〠');
    this.setState({ question_label: "" })
    this.setState({ question_content: content });
    console.log(this.state.question_content);
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }
  componentWillMount() {
  }
  


  componentDidMount() {
    this.props.load(this.state.question_id)
    // this.handleInitialize();
  }

  sendItems(values) {
    // question check
    console.log("sousin");
    let questionContent = this.state.question_content;
    if (!questionContent) {
      console.log("input check question");
      this.setState({ question_label: requiredErrMsg.replace("{0}", "Question") })
      return;
    }
    const question = {
      category_id: values.category,
      content: questionContent,
      answer: values.answer
    }
    console.log("question");
    console.log(question);
    // register
    client.post("http://localhost:3000/questions", { question: question })
      .then((res) => {
        let result = res.data;
        console.log(result);
        this.handlePageMove('/manage');
      })
      .catch((err) => {
        console.log(err);
        alert('Sever Error');
      })
  }

  render() {
    const { question, handleSubmit, submitting } = this.props
    console.log("★★★★★★★★★★★★★★★★★★★★★★★★★★★★★");
    
    console.log(question);
    let questionContent = ""
    if(question){
      questionContent = question.content ? question.content : "";
    }
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
                value={questionContent}
                apiKey="rjmdqspts9lz1p2mss4v5usuejb1svcgz9qnj9uli33ptnyn"
                init={{
                  height: 300,
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
            <label style={{ color: "#f00" }}>{this.state.question_label}</label>
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
};

@connect(
  state => ({
    question: state.question.questions,
    result: state.question.result,
    initialValues: state.question.payload
  }),
  { load }
);