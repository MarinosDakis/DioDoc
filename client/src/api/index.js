// adapted from: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=1
// adapted from: https://www.youtube.com/watch?v=aibtHnbeuio&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=2
import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/patient');
export const createPost = (newPost) => API.post('/patient', newPost);
export const likePost = (id) => API.patch(`/patient/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/patient/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/patient/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);