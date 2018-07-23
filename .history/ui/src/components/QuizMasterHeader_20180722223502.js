import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/user'

import { AppBar, Toolbar, MenuItem, Menu, Button } from 'material-ui'
import Typography from 'material-ui/Typography'
import { acceptPathName, rejectPathName } from "../common/Const";

const login_check = ()=>{
  let pathName = location.pathname;
  let token = localStorage.getItem('access_token');
  if (!token && acceptPathName.indexOf(pathName) !== -1) {
    window.location("/");
  }
}
login_check();

const admin_check = () => {
  let role_type = this.state.role_type
  if (role_type != "admin" && rejectPathName.indexOf(pathName) !== -1) {
    window.location("/");
  }
}
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
    this.signOut = this.signOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  signOut(){
    localStorage.removeItem('access_token');
    window.location("/");
    // this.props.history.push("/")
  }

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

  componentWillMount() {
    this.props.load()
  }

  componentDidMount() {
    let access_token = localStorage.getItem("access_token")
    if (access_token){
      this.props.load()
    }
  }

  render() {
    const { auth, role_type } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    if(role_type){
      admin_check();
    }
    let headerPath = !auth ? "/"
      : role_type === 'admin'
        ? '/manage'
        : '/quiz'
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" style={{ flex: 1, cursor: 'pointer' }} color="inherit" onClick={() => this.handlePageMove(headerPath)}>
              Quiz Master!
            </Typography>
            {auth && (
              <div>
                <Button
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                  style={{ "textTransform": 'none'}}
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
                  {role_type ==="admin" && (
                    <MenuItem onClick={this.handleClose}>Manage questions</MenuItem>
                  )}
                  <MenuItem onClick={this.handleClose}>Quiz mode</MenuItem>
                  <MenuItem onClick={this.signOut}>Sign out</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}