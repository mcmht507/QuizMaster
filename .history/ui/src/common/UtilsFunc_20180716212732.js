import Client from './Client'
import browserHistory from 'react-router'

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