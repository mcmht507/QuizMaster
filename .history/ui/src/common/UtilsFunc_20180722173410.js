import Client from './Client'

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
}

export default function login_check() {
  window.location("/");
}

