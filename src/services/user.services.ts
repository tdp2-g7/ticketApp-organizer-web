import { AxiosResponse } from 'axios';
import { ILoginFormData } from '../views/Login/types';
import { post } from './api';

export async function login(formData: ILoginFormData): Promise<AxiosResponse> {
  const response = await post('/user/login', formData);
  return response;
}
