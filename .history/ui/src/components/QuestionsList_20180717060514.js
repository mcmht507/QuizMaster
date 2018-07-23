import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/question'

import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Avatar, Card, CardContent, Button, TextField } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Email } from 'material-ui-icons'
import { Field, reduxForm } from 'redux-form'
import { error } from 'util';
import Client from '../common/Client'
import getLoginUser from "../common/UtilsFunc";
import { log } from '../../node_modules/util';

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
    }
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  componentDidMount() {
    this.props.load()
  }

  render() {
    const { questions } = this.props
    console.log(questions);
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
        {questions && questions.map((question) => {
          return (
            // ループで展開する要素には一意なkeyをつける（ReactJSの決まり事）
            <Card key={question.question_id} style={{ marginTop: '10px'}}>
              <CardContent style={{ color: '#408040' }}>
                <p style={{ margin: 5 }}>{question.content} </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    )
  }
}