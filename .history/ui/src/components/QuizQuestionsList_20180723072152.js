import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/question'
import { Card, CardContent, Typography, CardActions, Button, MobileStepper } from 'material-ui'
import {Done, Create} from 'material-ui-icons'

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

  render() {
    const { questions } = this.props
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
        {questions && questions instanceof Array &&(
          <MobileStepper
            variant="progress"
            steps={questions.length}
            activeStep={3}
            style={{margin:'10px',flexGrow: 1}}
            position="static"
            />
          )
        }
        {questions && questions instanceof Array && questions.map((question) => {
          let question_id = question.question_id
          let category_content = question.category_content
            ? question.category_content
            : "";
          let params = {
            pathname: '/solveQuiz/' + question_id,
          }
          return (
            <Card key={question_id} style={{ marginTop: '15px' }}>
              <CardContent style={{ color: '#408040' }}>
                <Typography style={{ }} color="textSecondary">
                  {question.is_correct === 1 &&(
                    <Done style={{ color: "#0f0"}}/>
                  )
                }
                </Typography>
                <Typography style={{ textAlign: 'right' }} color="textSecondary">
                  {category_content}
                </Typography>
                <Typography style={{ fontSize: "20px" }}>
                  <p style={{ margin: 5 }} dangerouslySetInnerHTML={{ __html: question.content }} ></p>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => this.handlePageMove(params)}>
                  <Create/>
               </Button>
              </CardActions>
            </Card>
          )
        })}
      </div>
    )
  }
}