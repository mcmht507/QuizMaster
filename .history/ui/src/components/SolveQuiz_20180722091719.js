import React from 'react'
import { connect } from 'react-redux';
import { Button, TextField, Card, CardContent, Typography } from 'material-ui'
import { Field, reduxForm } from 'redux-form'
// import { error } from 'util';
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
    if (!values.answer) {
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

export default class SolveQuiz extends React.Component {

  constructor(props) {
    super(props);
    this.sendItems = this.sendItems.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.state = {
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
      question_id: this.state.question_id,
      answer: values.answer
    }
    // update
    client.post("http://localhost:3000/questions/solve", { question: question })
      .then((res) => {
        alert('CORRECT');
        alert('INCORRECT');
        this.handlePageMove('/quiz');
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
    let category_content = "";
    let question_id = "";

    if (question) {
      question_id = question.question_id;
      category_id = question.category_id;
      category_content = question.category
        ? question.category.content
        : "";
      let inputQuestion = this.state.question_content
      questionContent = !inputQuestion ? question.content : inputQuestion;
      let initData = {
        category: category_id,
        questionContent: questionContent
      }
      this.props.initialize(initData);
    }
    return (
      <div>
        <QuizMasterHeader history={this.props.history} />
        <form onSubmit={handleSubmit(this.sendItems)} style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
          <Card key={question_id} style={{ marginTop: '15px' }}>
            <CardContent style={{ color: '#408040' }}>
              <Typography style={{ textAlign: 'right' }} color="textSecondary">
                {category_content}
              </Typography>
              <Typography style={{ fontSize: "20px" }}>
                <p style={{ margin: 5 }} dangerouslySetInnerHTML={{ __html: questionContent }} ></p>
              </Typography>
            </CardContent>
          </Card>
          <div style={{ marginRight: 10 }}>
            <label style={{ marginRight: 5 }}>Answer：</label>
            <Field name="answer" type="text" ref={this.setAnsRef} component={FormTextField} />
          </div>
          <Button style={{ marginTop: 20, "textTransform": 'capitalize' }} color="primary" type="submit" disabled={submitting}>Solve</Button>
        </form>
      </div>
    )
  }
}