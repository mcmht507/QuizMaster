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
    result: state.user.result
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
      <div>
        {questions && users.map((user) => {
          return (
            // ループで展開する要素には一意なkeyをつける（ReactJSの決まり事）
            <Card key={user.email} style={{ marginTop: '10px' }}>
              <CardContent style={{ color: '#408040' }}>
                <Avatar src={user.picture.thumbnail} />
                <p style={{ margin: 10 }}>{'名前:' + user.name.first + ' ' + user.name.last} </p>
                <p style={{ margin: 10 }}>{'性別:' + (user.gender == 'male' ? '男性' : '女性')}</p>
                <div style={{ textAlign: 'right' }} >
                  <Button onClick={() => this.handleClickOpen(user)}><Email />メールする</Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    )
  }
}