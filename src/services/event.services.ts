import { AxiosResponse } from 'axios';
import { IEvent } from '../types/events.types';
import { get, patch, post } from './api';

export async function createEvent(data: IEvent): Promise<AxiosResponse> {
  const response = await post('/events', data);
  return response;
}

export async function getEventsByUserId(data: any): Promise<any> {
  const response = await get(`/events/organizer/${data.userId}?page=${data.page}&offset=${data.offset}`);
  return response;
}

export async function getDetails(eventId: string): Promise<any> {
  const response = await get(`/events/${eventId}`);
  return response;
}

export async function onEditEvent(data: IEvent): Promise<AxiosResponse> {
  const response = await patch(`/events/${data.eventId}}`, data);

  return response;
}
