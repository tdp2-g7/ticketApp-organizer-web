import { AxiosResponse } from 'axios';
import { USERS_API_URL } from 'src/configs/configs';
import { IUser } from 'src/types/users.types';
import { ILoginFormData } from 'src/views/Login/types';
import { patch, post } from './api';

export async function login(formData: ILoginFormData): Promise<AxiosResponse> {
  const response = await post(`${USERS_API_URL}/users/organizer/login`, formData);
  return response;
}

export async function register(data: IUser): Promise<AxiosResponse> {
  const response = await post(`${USERS_API_URL}/users/organizer`, data);
  return response;
}

export async function editProfile(data: any): Promise<AxiosResponse> {
  const { id, ...body } = data;
  const response = await patch(`${USERS_API_URL}/users/organizers/${id}`, body);
  return response;
}
