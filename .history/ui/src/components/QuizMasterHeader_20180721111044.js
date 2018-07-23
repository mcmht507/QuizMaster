import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/user'

import { AppBar, Toolbar, MenuItem, Menu, CardContent, Button, TextField } from 'material-ui'
import IconButton from '@material-ui/core/IconButton';
import Typography from 'material-ui/Typography'
import { Field, reduxForm } from 'redux-form'
import { withStyles } from '@material-ui/core/styles';

// connectのdecorator
@connect(
  // propsに受け取るreducerのstate
  state => ({
    login_user: state.user.login_user,
    username: state.user.login_user && state.user.login_user.name
      ? state.user.login_user.name
      : null,
    auth: state.user.result,
    role_type: state.user.login_user && state.user.login_user.role_type
      ? state.user.login_user.role_type
      : "public",
    result: state.user.result
  }),
  // propsに付与するactions
  { load }
)

export default class QuizMasterHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      user: null,
      auth: false,
      anchorEl: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  handleChange(event, checked) {
    this.setState({ auth: checked });
  };

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose() {
    this.setState({ anchorEl: null });
  };

  handlePageMove(path) {
    this.props.history.push(path)
  }

  componentDidMount() {
    console.log("読み込み");

    this.props.load()
  }

  render() {
    const { auth, role_type } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    console.log("再読込");
    console.log(`role_type:${role_type}`);

    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" style={{ flex: 1 }} color="inherit" onClick={() => this.handlePageMove('/')}>
              Quiz Master!
            </Typography>
            {auth && (
              <div>
                <Button
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  {this.props.username}
                </Button>
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
                  return (
                    role_type === "admin" ?
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                      :
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  )
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}