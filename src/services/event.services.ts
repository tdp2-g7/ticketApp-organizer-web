import { AxiosResponse } from 'axios';
import { post } from './api';

export async function createEvent(data: any): Promise<AxiosResponse> {
  const response = await post('/event', data);
  return response;
}
