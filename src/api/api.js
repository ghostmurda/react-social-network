import * as axios from 'axios';
const basedUrl = 'https://test-social-network-api.herokuapp.com';
//const basedUrl = 'http://localhost:5000'

axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

export const loginReq = (login, password) => {
    return axios.post(`${basedUrl}/login`, {login: login, password: password})
        .then(res => res.data);
}

export const profilePageReq = (id) => {
    return axios.get(`${basedUrl}/api/users/profile?userId=${id}`)
        .then(res => res.data);
}

export const getFollowingListReq = (id) => {
    return axios.get(`${basedUrl}/api/users/following?userId=${id}`)
        .then(res => res.data);
}

export const getAllUsersListReq = () => {
    return axios.get(`${basedUrl}/api/users/all?skip=0&pageSize=5`)
        .then(res => res.data);
}

export const putUserInfoReq = (id, info) => {
    return axios.put(`${basedUrl}/api/users/info`, {userId: id, info: info})
        .then(res => res.data);
}

export const addPostReq = (userId, creator, text) => {
    return axios.post(`${basedUrl}/api/users/profile/addpost`, {userId, creator, text})
        .then(res => res.data);
}