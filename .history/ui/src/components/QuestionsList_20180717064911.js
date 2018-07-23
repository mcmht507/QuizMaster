import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/question'
import { Route, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router';

import { Card, CardContent, CardActions, Button, TextField } from 'material-ui'
import AddIcon from 'material-ui-icons/Add';


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

  handlePageMove(path) {
    this.props.history.push(path)
    // return <Redirect push to="/sample" >Edit</Redirect>
  }

  componentDidMount() {
    this.props.load()
  }

  render() {
    const { questions } = this.props
    console.log(questions);
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Button variant="fab" color="primary" aria-label="Add" style={{ position: "fixed", bottom: "10px", right: "10px", zIndex: 10 }}>
          <AddIcon />
        </Button>
        {questions && questions.map((question) => {
          return (
            <Card key={question.question_id} style={{ marginTop: '15px' }}>
              <CardContent style={{ color: '#408040' }}>
                <p style={{ margin: 5 }}>{question.content} </p>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => this.handlePageMove('/quizEdit')}>
                  Edit
                </Button>
                <Button size="small" color="primary">
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