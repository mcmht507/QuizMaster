import React from 'react'

import { AppBar, Toolbar, Avatar, Card, CardContent, Button, TextField } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Field, reduxForm } from 'redux-form'
// import client from 'axios'

export default class QuizMasterHeader extends React.Component {

  constructor(props) {
    super(props)
    this.state = { username: this.props.username }
  }

  componentWillMount() {
    console.log("こやで１");
    
    this.props.load()
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              Quiz Master!
            </Typography>
            <Button style={{ color: '#fff', position: 'absolute', top: 15, right: 0 }} onClick={() => this.handlePageMove('/')}>{this.state.username}</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}