// 
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: 'Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn',
  },
});

export default instance;