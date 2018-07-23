import client from 'axios'

let token = localStorage.getItem("access_token") || null;
axios.defaults.headers.common['Authorization'] = token;
module.exports.client = client;