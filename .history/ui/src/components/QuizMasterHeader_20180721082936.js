import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/user'

import { AppBar, Toolbar, MenuItem, Menu, CardContent, Button, TextField } from 'material-ui'
import IconButton from '@material-ui/core/IconButton';
import Typography from 'material-ui/Typography'
import { Field, reduxForm } from 'redux-form'

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
            <Typography type="title" color="inherit" onClick={() => this.handlePageMove('/')}>
              Quiz Master!
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
            <Button style={{ color: '#fff', position: 'absolute', top: 15, right: 0 }} onClick={() => this.handlePageMove('/')}>{this.props.username}</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}