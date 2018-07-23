import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/user'

import QuizMasterHeader from './QuizMasterHeader'
import QuestionsList from './QuestionsList'

// connectのdecorator
@connect(
  // propsに受け取るreducerのstate
  state => ({
    login_user: state.user.login_user,
    username: state.user.login_user && state.user.login_user.name
      ? state.user.login_user.name
      : null,
    result: state.user.result
  }),
  // propsに付与するactions
  { load }
)
export default class ManageQuiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      user: null,
    }
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  componentDidMount() {
    this.props.load()
  }

  render() {
    const { login_user } = this.props
    console.log(login_user);
    if (login_user && login_user.result === false) {
      this.props.history.push("/")
    }
    return (
      <div>
        <QuizMasterHeader history={this.props.history} />
        <QuestionsList key='questionsList' history={ this.props.history } />
      </div>
    )
  }
}