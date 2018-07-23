import React from 'react'
import { connect } from 'react-redux';
import { load, add } from '../reducers/user'

import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Avatar, Card, CardContent, Button, Dialog, DialogTitle, DialogContent } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Email } from 'material-ui-icons'


export default class TodoPage extends React.Component {

  handlePageMove(path) {
    this.props.history.push(path)
  }

  render() {
    const { todos } = this.props

    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              TODOページ
              </Typography>
            <Button style={{ color: '#fff', position: 'absolute', top: 15, right: 0 }} onClick={() => this.handlePageMove('/')}>ユーザページへ</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}