import Client from './Client'
import browserHistory from 'react-router'

export default function getUse(){
  Client.get("http://localhost:3000/users/myself")
    .then((res) => {
      let user = res.data;
      console.log("成功");
      console.log(user);
      browserHistory()
      return user;
    })
    .catch((err, aaaaa) => {
      console.log(err);
      return null;
    })
}