import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/user'
import QuizMasterHeader from './QuizMasterHeader'
import QuizQuestionsList from './QuizQuestionsList'

@connect(
  state => ({
    login_user: state.user.login_user,
    username: state.user.login_user && state.user.login_user.name
      ? state.user.login_user.name
      : null,
    result: state.user.result
  }),
  { load }
)
export default class QuizMode extends React.Component {
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
  componentDidUpdate() {
    this.props.load()
  }

  componentDidMount() {
    this.props.load()
  }

  render() {
    const { login_user } = this.props
    if (login_user && login_user.result === false) {
      this.props.history.push("/")
    }
    return (
      <div>
        <QuizMasterHeader history={this.props.history} />
        <QuizQuestionsList history={this.props.history} />
      </div>
    )
  }
}