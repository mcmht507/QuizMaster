import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/question'

import { Card, CardContent, CardActions, Button, Typography } from 'material-ui'
import { Done } from 'material-ui-icons'
import client from '../common/Client'

@connect(
  state => ({
    questions: state.question.questions,
    result: state.question.result
  }),
  { load }
)

export default class QuestionsList extends React.Component {
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
    return (
      <div key='questionsList' style={{ width: '80%', margin: '0 auto' }}>

        {questions && questions instanceof Array && questions.map((question) => {
          let question_id = question.question_id
          let category_content = question.category_content
            ? question.category.content
            : "";
          let params = {
            pathname: '/editQuiz/' + question_id,
          }
          return (
            <Card key={question_id} style={{ marginTop: '15px' }}>
              <CardContent style={{ color: '#408040' }}>
                <Typography style={{ textAlign: 'right' }} color="textSecondary">
                  {category_content}
                </Typography>
                <Typography style={{ fontSize: "20px" }}>
                  <p style={{ margin: 5 }} dangerouslySetInnerHTML={{ __html: question.content }} ></p>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => this.handlePageMove(params)}>
                  Edit
                </Button>
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