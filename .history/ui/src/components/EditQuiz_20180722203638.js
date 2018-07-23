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
// import { requiredErrMsg } from '../common/Const'

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
    // TODO:必須チェックがきかないため、後で調査
    console.log("values.category");
    console.log(values.category);
    
    // if (!values.category) {
    //   errors.email = requiredErrMsg.replace("{0}", "Category")
    // }
    // if (!values.question_content) {
    //   errors.email = requiredErrMsg.replace("{0}", "Question")
    // }
    // if (!values.answer) {
    //   errors.answer = requiredErrMsg.replace("{0}", "Answer")
    // }
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

export default class EditQuiz extends React.Component {

  constructor(props) {
    super(props);
    this.sendItems = this.sendItems.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.state = {
      category_id: null,
      question_content: null,
      question: null,
      history: this.props.history,
      question_id: this.props.match.params.question_id
    };
    this.ansInput = null;
    this.setAnsRef = element => {
      this.ansInput = element;
    };

    this.getAnswer = () => {
      return this.ansInput ? this.ansInput.value : ""
    };
  }

  updateCategoryId(category_id) {
    this.setState({ category_id })
    console.log('USAUSAUSAUSAUSAUSAUSAUSAUSAUSAUSAUSAUSAUSAUSAUSAUSAUSA');
    console.log(this.state.category_id);
    
  }

  handleEditorChange(content) {
    this.setState({ question_content: content });
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  componentDidMount() {
    this.props.load(this.state.question_id)
  }

  sendItems(values) {
    const question = {
      content: values.questionContent,
      answer: values.answer,
      category_id: values.category
    }
    // update
    client.patch("http://localhost:3000/questions/" + this.state.question_id, { question: question })
      .then((res) => {
        let result = res.data;
        // this.handlePageMove('/manage');
      })
      .catch((err) => {
        console.log(err);
        alert('Sever Error');
      })
  }

  render() {
    const { question, handleSubmit, submitting } = this.props
    let category_id = "";
    let questionContent = "";
    let answerContent = "";
    if (question) {
      let input_category_id = this.state.category_id
      category_id = !input_category_id ? question.category_id : question.category_id;
      let inputQuestion = this.state.question_content
      questionContent = !inputQuestion ? question.content : inputQuestion;
      let inputAnswer = this.getAnswer();
      answerContent = !inputAnswer ? question.answer : inputAnswer;
      let initData = {
        category: category_id,
        questionContent: questionContent,
        answer: answerContent
      }
      this.props.initialize(initData);
    }
    return (
      <div key={"editQuiz"}>
        <QuizMasterHeader history={this.props.history} />
        <form onSubmit={handleSubmit(this.sendItems)} style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
          <div>
            <CategoryList history={this.props.history} category_id={category_id} updateState={this.updateCategoryId.bind(this)} />
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center' }}>
              <label style={{ marginRight: 5 }}>Question：</label>
              <Editor
                name="questionContent"
                value={questionContent}
                onEditorChange={this.handleEditorChange}
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
            <div style={{ marginRight: 10 }}>
              <label style={{ marginRight: 5 }}>Answer：</label>
              <Field name="answer" type="text" ref={this.setAnsRef} component={FormTextField} />
            </div>
            <Button style={{ marginTop: 20, "textTransform": 'capitalize' }} color="primary" type="submit" disabled={submitting}>Update</Button>
          </div>
        </form>
      </div>
    )
  }
}