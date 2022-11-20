import axios, { AxiosRequestConfig } from 'axios';
import { LoginUserParams, RegisterUserParams, User } from './types';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3001/api'
});

const config: AxiosRequestConfig = {
  withCredentials: true
};

export const registerUser = (data: RegisterUserParams) => axiosClient.post<User>('/register', data);

export const loginUser = (data: LoginUserParams) =>
  axiosClient.post<User>('/auth/login', data, config);

export const getAuthUser = () => axiosClient.get<User>('/auth/status', config);

export const createPlan = () => axiosClient.post('/plans', config);
