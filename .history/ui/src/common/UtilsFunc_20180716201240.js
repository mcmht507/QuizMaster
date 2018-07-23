import Client from './Client'
import Redirect from 'react-router-dom'

export default function getUse(history){
  Client.get("http://localhost:3000/users/myself")
    .then((res) => {
      let user = res.data;
      console.log("成功");
      history.push("/aaaaaaaaaa");
      console.log(user);
      return user;
    })
    .catch((err, aaaaa) => {
      console.log(err);
      return null;
    })
}