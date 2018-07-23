import axios from 'axios'

let token = localStorage.getItem("access_token") || null;
axios.defaults.headers.common['Authorization'] = token;
export default client = client;