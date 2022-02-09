import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return { headers: { authorization: `Bearer ${token}` } };
}

function registerUser(body) {
  const promise = axios.post(`${BASE_URL}/register`, body);


  return promise;
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);

  return promise;
}

function getUser(token) {
  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/user`, config);

  return promise;
}


function entrace(body, token) {
  const config = createConfig(token);
  // eslint-disable-next-line
  const obj =[body , config] 

  const promise = axios.put(`${BASE_URL}/entrace`, body,config);

  return promise;
}


const api = {
  registerUser,
  login,
  getUser,
  entrace
}

export default api;