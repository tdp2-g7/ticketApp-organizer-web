import { AxiosResponse } from 'axios';
import { EVENTS_API_URL } from 'src/configs/configs';
import { IEvent } from '../types/events.types';
import { get, patch, post } from './api';

export async function createEvent(data: IEvent): Promise<AxiosResponse> {
  const response = await post(`${EVENTS_API_URL}/events`, data);
  return response;
}

export async function getEventsByUserId(data: any): Promise<any> {
  let url = `${EVENTS_API_URL}/events/organizer/${data.userId}?page=${data.page}&offset=${data.offset}`;

  /* eslint-disable */
  data.title && (url += `&title=${data.title}`); 
  data.location && (url += `&location=${data.location}`); 
  data.type && (url += `&type=${data.type}`);
  data.orderByTitle && (url += `&orderByTitle=${data.orderByTitle}`);
  data.orderByType && (url += `&orderByType=${data.orderByType}`);
  data.orderByDate && (url += `&orderByDate=${data.orderByDate}`);
  data.orderByVacancies && (url += `&orderByVacancies=${data.orderByVacancies}`);
  /* eslint-enable */
  const response = await get(url);
  return response;
}

export async function getDetails(eventId: string): Promise<AxiosResponse> {
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

export async function onUpdateDraft(data: IEvent, eventDraftId: string): Promise<AxiosResponse> {
  const response = await patch(`${EVENTS_API_URL}/events/draft/${eventDraftId}`, data);
  return response;
}

export async function onGetDrafts(userId: string): Promise<AxiosResponse> {
  const response = await get(`${EVENTS_API_URL}/events/draft/${userId}`);
  return response;
}

export async function onGetLocations(userId: string): Promise<AxiosResponse> {
  const response = await get(`${EVENTS_API_URL}/events/locations/${userId}`);
  return response;
}

export async function onCreateFromDraft(data: IEvent): Promise<AxiosResponse> {
  const response = await post(`${EVENTS_API_URL}/events/from-draft`, data);
  return response;
}

export async function onCancel(eventId: string): Promise<AxiosResponse> {
  const response = await patch(`${EVENTS_API_URL}/events/cancel/${eventId}`);
  return response;
}

export async function onGetStatistics(eventId: string): Promise<AxiosResponse> {
  const response = await get(`${EVENTS_API_URL}/event-reservations/registration-metrics/{eventId}?id=${eventId}`);
  // const data = {
  //   eventId,
  //   bar: [
  //     {
  //       time: '19:00 - 19:20',
  //       quantity: 4000,
  //     },
  //     {
  //       time: '19:20 - 19:40',
  //       quantity: 3000,
  //     },
  //     {
  //       time: '19:40 - 20:00',
  //       quantity: 2000,
  //     },
  //     {
  //       time: '20:00 - 20:20',
  //       quantity: 2780,
  //     },
  //     {
  //       time: '20:20 - 20:40',
  //       quantity: 1890,
  //     },
  //     {
  //       time: '21:00 - 21:20',
  //       quantity: 2390,
  //     },
  //   ],
  //   line: [
  //     {
  //       time: '19:00',
  //       quantity: 0,
  //     },
  //     {
  //       time: '19:20',
  //       quantity: 100,
  //     },
  //     {
  //       time: '19:40',
  //       quantity: 500,
  //     },
  //     {
  //       time: '20:00',
  //       quantity: 1300,
  //     },
  //     {
  //       time: '20:20',
  //       quantity: 1900,
  //     },
  //     {
  //       time: '20:40',
  //       quantity: 2000,
  //     },
  //     {
  //       time: '21:00',
  //       quantity: 2500,
  //     },
  //     {
  //       time: '21:20',
  //       quantity: 2900,
  //     },
  //   ],
  //   pie: [
  //     { name: 'Ingresados', quantity: 400 },
  //     { name: 'Sin ingresar', quantity: 300 },
  //   ],
  // };
  return response;
}

export async function onGetEventsByState(userId: string): Promise<any> {
  console.log('🚀 ~ getEventsByState ~ userId:', userId);
  // const response = await patch(`${EVENTS_API_URL}/events/cancel/${eventId}`);
  const response = [
    { name: 'Bloqueado', value: 300 },
    { name: 'Cancelado', value: 300 },
    { name: 'En curso', value: 400 },
    { name: 'Finalizado', value: 200 },
    { name: 'Activo', value: 200 },
    { name: 'Borrador', value: 50 },
  ];
  return response;
}

export async function onGetEventsByMonth(userId: string, year: number): Promise<any> {
  console.log('🚀 ~ getEventsByMonth ~ year:', year);
  console.log('🚀 ~ getEventsByState ~ userId:', userId);
  // const response = await patch(`${EVENTS_API_URL}/events/cancel/${eventId}`);
  const response = [
    {
      name: '01',
      value: 4000,
    },
    {
      name: '02',
      value: 3000,
    },
    {
      name: '03',
      value: 2000,
    },
    {
      name: '05',
      value: 2780,
    },
    {
      name: '06',
      value: 1890,
    },
    {
      name: '07',
      value: 2390,
    },
    {
      name: '08',
      value: 3490,
    },
    {
      name: '09',
      value: 500,
    },
    {
      name: '10',
      value: 1000,
    },
    {
      name: '11',
      value: 1254,
    },
    {
      name: '12',
      value: 764,
    },
  ];
  return response;
}
