import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/user'
import { Button } from 'material-ui'

import AddIcon from 'material-ui-icons/Add';
import QuizMasterHeader from './QuizMasterHeader'
import ManageQuestionsList from './ManageQuestionsList'

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
        <ManageQuestionsList history={ this.props.history } />
        <Button variant="fab" color="primary" aria-label="Add" onClick={() => this.handlePageMove('/registerQuiz')} style={{ position: "fixed", bottom: "10px", right: "10px", zIndex: 10 }}>
          <AddIcon />
        </Button>
      </div>
    )
  }
}