import * as axios from 'axios';
const basedUrl = 'https://test-social-network-api.herokuapp.com';
//const basedUrl = 'http://localhost:5000'

axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

export const loginReq = (login, password) => {
    return axios.get(`${basedUrl}/login?login=${login}&password=${password}`)
        .then(res => res.data);
}