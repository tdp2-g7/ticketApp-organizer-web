import { AxiosResponse } from 'axios';
import { IEvent } from '../types/events.types';
import { get, post } from './api';

export async function createEvent(data: IEvent): Promise<AxiosResponse> {
  const response = await post('/events', data);
  return response;
}

export async function getEventsByUserId(data: any): Promise<any> {
  let url = `/events/filteredBy?page=${data.page}&offset=${data.offset}`;

  /* eslint-disable */
  data.title && (url += `&title=${data.title}`); 
  data.type && (url += `&type=${data.type}`);
  data.userId && (url += `&userId=${data.userId}`);
  data.orderByTitle && (url += `&orderByTitle=${data.orderByTitle}`);
  data.orderByType && (url += `&orderByType=${data.orderByType}`);
  data.orderByDate && (url += `&orderByDate=${data.orderByDate}`);
  data.orderByVacancies && (url += `&orderByVacancies=${data.orderByVacancies}`);
  /* eslint-enable */
  const response = await get(url);
  return response;
}

export async function getDetails(eventId: string): Promise<any> {
  const response = await get(`/events/${eventId}`);
  return response;
}
