import { AxiosResponse } from 'axios';
import { EVENTS_API_URL } from 'src/configs/configs';
import { IEvent } from '../types/events.types';
import { get, patch, post } from './api';

export async function createEvent(data: IEvent): Promise<AxiosResponse> {
  const response = await post(`${EVENTS_API_URL}/events`, data);
  return response;
}

export async function getEventsByUserId(data: any): Promise<any> {
  let url = `${EVENTS_API_URL}/events/filteredBy?page=${data.page}&offset=${data.offset}`;

  /* eslint-disable */
  data.title && (url += `&title=${data.title}`); 
  data.type && (url += `&type=${data.type}`);
  data.userId && (url += `&userId=${data.userId.toString()}`);
  data.orderByTitle && (url += `&orderByTitle=${data.orderByTitle}`);
  data.orderByType && (url += `&orderByType=${data.orderByType}`);
  data.orderByDate && (url += `&orderByDate=${data.orderByDate}`);
  data.orderByVacancies && (url += `&orderByVacancies=${data.orderByVacancies}`);
  /* eslint-enable */
  const response = await get(url);
  return response;
}

export async function getDetails(eventId: string): Promise<any> {
  const response = await get(`${EVENTS_API_URL}/events/${eventId}`);
  return response;
}

export async function onEditEvent(data: IEvent): Promise<AxiosResponse> {
  const response = await patch(`${EVENTS_API_URL}/events/${data.eventId}`, data);
  return response;
}

export async function onCreateDraft(data: IEvent): Promise<AxiosResponse> {
  const response = await post(`${EVENTS_API_URL}/events/draft`, data);
  return response;
}

export async function onGetDrafts(userId: string): Promise<any> {
  // const response = await get(`${EVENTS_API_URL}/events/drafts/${userId}`);

  const response = [
    {
      eventId: 'ab89a968-1c39-415b-8a79-dad00ef291cf',
      userId,
      description: 'EVENTO MARTIN GARRIX',
      type: 'Concierto ',
      vacancies: 100000,
      ticketsPerPerson: 4,
      faqs: 'P: ¿Quien toca?\nR: Martin Garrix',
    },
  ];
  return response;
}
