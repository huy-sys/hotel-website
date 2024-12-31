import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL của Node.js server
});

export const signUp = async (username: string, password: string) => {
  return await api.post('/signup', { username, password });
};

export const signIn = async (username: string, password: string) => {
  return await api.post('/signin', { username, password });
};

export const getProtectedData = async (token: string) => {
  return await api.get('/protected', {
    headers: {
      Authorization: token,
    },
  });
};
