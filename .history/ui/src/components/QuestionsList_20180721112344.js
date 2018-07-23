import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/question'

import { Card, CardContent, CardActions, Button} from 'material-ui'
import client from '../common/Client'



// connectのdecorator
@connect(
  // propsに受け取るreducerのstate
  state => ({
    questions: state.question.questions,
    result: state.question.result
  }),
  // propsに付与するactions
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

  deleteQuestion(){
    const question = {
      content: values.questionContent,
      answer: values.answer,
      category_id: values.category
    }
    // update
    client.patch("http://localhost:3000/questions/" + this.state.question_id, { question: question })
      .then((res) => {
        let result = res.data;
        this.handlePageMove('/manage');
      })
      .catch((err) => {
        console.log(err);
        alert('Sever Error');
      })
    this.handlePageMove('/manage');
  }

  render() {
    const { questions } = this.props
    console.log(questions);
    return (
      <div key='questionsList' style={{ width: '80%', margin: '0 auto' }}>

        {questions && questions instanceof Array && questions.map((question) => {
          let params = {
            pathname: '/editQuiz/' + question.question_id,
            // state: { question_id: question.question_id}
          }
          return (
            <Card key={question.question_id} style={{ marginTop: '15px' }}>
              <CardContent style={{ color: '#408040' }}>
                <p style={{ margin: 5 }} dangerouslySetInnerHTML={{__html: question.content}} ></p>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => this.handlePageMove(params)}>
                  Edit
                </Button>
                <Button size="small" color="primary" onClick={() => this.handlePageMove(params)}>
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