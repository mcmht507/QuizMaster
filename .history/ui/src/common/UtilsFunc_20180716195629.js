export default getUser = () => {
  Client.get("http://localhost:3000/users/myself")
    .then((res) => {
      let user = res.data;
      console.log("成功");
      console.log(user);
      return user;
    })
    .catch((err, aaaaa) => {
      console.log(err);
    })
}