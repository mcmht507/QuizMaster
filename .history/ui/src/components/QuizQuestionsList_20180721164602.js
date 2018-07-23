import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/question'
import { Card, CardContent, Typography, CardActions, Button } from 'material-ui'
import Done from 'material-ui-icons/Done'
import client from '../common/Client'

@connect(
  state => ({
    questions: state.question.questions,
    result: state.question.result
  }),
  { load }
)

export default class QuizQuestionsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      question: null,
      history: this.props.history
    }
  }
  handlePageMove(params) {
    this.props.history.push(params)
  }

  componentDidMount() {
    this.props.load()
  }

  deleteQuestion(question_id) {
    // delete question
    client.delete("http://localhost:3000/questions/" + question_id)
      .then((res) => {
        this.props.load()
      })
      .catch((err) => {
        console.log(err);
        alert('Sever Error');
      })
  }

  render() {
    const { questions } = this.props
    console.log(questions);
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
        {questions && questions instanceof Array && questions.map((question) => {
          let question_id = question.question_id
          let category_content = question.category
            ? question.category.content
            : "";
          let params = {
            pathname: '/editQuiz/' + question_id,
          }
          return (
            <Card key={question_id} style={{ marginTop: '15px' }}>
              <CardContent style={{ color: '#408040' }}>
                <Typography style={{ }} color="textSecondary">
                  <Done style={{ color: "#0f0"}}/>
                </Typography>
                <Typography style={{ textAlign: 'right' }} color="textSecondary">
                  {category_content}
                </Typography>
                <Typography style={{ fontSize: "20px" }}>
                  <p style={{ margin: 5 }} dangerouslySetInnerHTML={{ __html: question.content }} ></p>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => this.deleteQuestion(question_id)}>
                  Delete
               </Button>
              </CardActions>
            </Card>
          )
        })}
      </div>
    )
  }
}