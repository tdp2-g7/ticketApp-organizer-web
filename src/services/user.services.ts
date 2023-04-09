import { AxiosResponse } from 'axios';
import { USERS_API_URL } from 'src/configs/configs';
import { IUser } from 'src/types/users.types';
import { ILoginFormData } from '../views/Login/types';
import { post } from './api';

export async function login(formData: ILoginFormData): Promise<AxiosResponse> {
  const response = await post(`${USERS_API_URL}/user/login`, formData);
  return response;
}

export async function register(data: IUser): Promise<AxiosResponse> {
  const response = await post(`${USERS_API_URL}/users`, data);
  return response;
}
