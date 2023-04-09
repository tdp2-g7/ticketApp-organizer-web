import { AxiosResponse } from 'axios';
import { USERS_API_URL } from 'src/configs/configs';
import { IUser } from 'src/types/users.types';
import { post } from './api';

export async function login(data: any): Promise<AxiosResponse> {
  const response = await post('/user/login', data);
  return response;
}

export async function register(data: IUser): Promise<AxiosResponse> {
  const response = await post(`${USERS_API_URL}/users`, data);
  return response;
}
