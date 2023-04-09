import { AxiosResponse } from 'axios';
import { EVENTS_API_URL } from 'src/configs/configs';
import { IEvent } from '../types/events.types';
import { get, post } from './api';

export async function createEvent(data: IEvent): Promise<AxiosResponse> {
  const response = await post(`${EVENTS_API_URL}/events`, data);
  return response;
}

export async function getEventsByUserId(data: any): Promise<any> {
  const response = await get(`${EVENTS_API_URL}/events/organizer/${data.userId}?page=${data.page}&offset=${data.offset}`);
  return response;
}

export async function getDetails(eventId: string): Promise<any> {
  const response = await get(`${EVENTS_API_URL}/events/${eventId}`);
  return response;
}
