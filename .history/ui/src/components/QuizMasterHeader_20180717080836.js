import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/user'

import { AppBar, Toolbar, Avatar, Card, CardContent, Button, TextField } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Field, reduxForm } from 'redux-form'

// connectのdecorator
@connect(
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


export default class QuizMasterHeader extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { username: this.props.username }
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }
  render() {
    return (
      <div>
        {this.props.username}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              Quiz Master!
            </Typography>
            // <Button style={{ color: '#fff', position: 'absolute', top: 15, right: 0 }} onClick={() => this.handlePageMove('/')}>{this.props.username}</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}