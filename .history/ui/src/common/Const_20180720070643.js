export default requiredErrMsg = '{0} is a required filed'

export default function getLoginUser() {
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