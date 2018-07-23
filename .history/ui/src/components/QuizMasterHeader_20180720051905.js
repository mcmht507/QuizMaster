import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/user'

import { AppBar, Toolbar,  Button } from 'material-ui'
import Typography from 'material-ui/Typography'

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

export default class QuizMasterHeader extends React.Component {
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
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              Quiz Master!
            </Typography>
            <Button style={{ color: '#fff', position: 'absolute', top: 15, right: 0 }} onClick={() => this.handlePageMove('/')}>{this.props.username}</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}