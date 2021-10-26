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

// from prev project
export const fetchPosts = () => API.get('/patient');
export const createPost = (newPost) => API.post('/patient', newPost);
export const likePost = (id) => API.patch(`/patient/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/patient/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/patient/${id}`);

// for users loggin in
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

// for retreiving messages
export const fetchMessages = (id) => API.get(`/messages/${id}`);
export const createMessage = (newMessage) => API.post('/messages', newMessage);
export const updateMessage = (id, updatedMessage) => API.patch(`/messages/${id}`, updatedMessage);
export const deleteMessage = (id) => API.delete(`/messages/${id}`);

// for patients
export const fetchProfile = (id) => API.get(`/profile/${id}`);
export const updateAccount = (id, updatedAccount) => API.patch(`/profile/${id}`, updatedAccount);
export const deleteAccount = (id) => API.delete(`/settings/${id}`)
export const updateEmail = (id, updatedEmail) => API.patch(`/settings/${id}`, updatedEmail);