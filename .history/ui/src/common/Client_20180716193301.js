import axios from 'axios'

let token = localStorage.getItem("access_token") || null;
axios.defaults.headers.common['Authorization'] = token;
axios.defaults.headers.common['Content-Type'] = "Content-Type";
axios.defaults.headers.common['Accept'] = "application/json";
export default Client = client;