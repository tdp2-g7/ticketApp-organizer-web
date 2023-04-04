import { AxiosResponse } from 'axios';
import { IEvent } from '../types/events.types';
import { get, post } from './api';

export async function createEvent(data: IEvent): Promise<AxiosResponse> {
  const response = await post('/events', data);
  return response;
}

export async function getEventsByUserId(data: any): Promise<any> {
  const response = await get(`/events/organizer/${data.organizerId}?page=${data.page}&offset=${data.offset}`);
  return response;
}
