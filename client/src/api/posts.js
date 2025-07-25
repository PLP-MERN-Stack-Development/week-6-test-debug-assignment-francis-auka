import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (postData) => API.post('/posts', postData);
