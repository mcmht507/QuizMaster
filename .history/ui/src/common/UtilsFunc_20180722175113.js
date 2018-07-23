import Client from './Client'
import { acceptPathName } from "./Const";

export default function getLoginUser(){
  Client.get("http://localhost:3000/users/myself")
    .then((res) => {
      let user = res.data;
      return user;
    })
    .catch((err) => {
      console.log(err);
      return null;
    })
};

export default function login_check() {
  let pathName = location.pathname;
  let token = localStorage.getItem('access_token');
  if (!token && acceptPathName.indexOf(pathName) !== -1){
    window.location("/");
  }
};

