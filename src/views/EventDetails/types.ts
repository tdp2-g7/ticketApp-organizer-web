import { IEvent } from '../../types/events.types';

export interface IEventDetailsProps {
  event: IEvent;
}

export interface IEditEventFormData {
  title: string;
  description: string;
  location: string;
  type: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  image: any;
  vacancies: number;
  ticketsPerPerson: number;
  faqs: string;
}
