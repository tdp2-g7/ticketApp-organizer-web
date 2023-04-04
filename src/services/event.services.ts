import { AxiosResponse } from 'axios';
import { IEvent } from '../types/events.types';
import { get, post } from './api';

export async function createEvent(data: IEvent): Promise<AxiosResponse> {
  console.log('🚀 ~ createEvent ~ data:', data);
  const dataa = {
    userId: '0',
    title: 'string',
    description: 'string',
    location: 'string',
    type: 'string',
    date: '2023-04-03T21:49:10.250Z',
    time: 'string',
    image: 'string',
    vacancies: 140,
    ticketsPerPerson: 10,
    faqs: 'string',
  };
  const response = await post('/events', dataa);
  return response;
}

export async function getEventsByUserId(data: any): Promise<any> {
  const response = await get(`/events/organizer/${data.userId}?offset=${data.offset}?page${data.page}`);
  return response;
}
