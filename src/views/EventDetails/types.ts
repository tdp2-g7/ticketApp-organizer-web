import { IEvent } from '../../types/events.types';

export interface IEventDetailsProps {
  event: IEvent;
  scheduleModalOpen: boolean;
  setScheduleModalOpen: (value: boolean) => void;
  mapsModalOpen: boolean;
  setMapsModalOpen: (value: boolean) => void;
  loading: boolean;
}

export interface IRowProps {
  hasMargin?: boolean;
}

export interface ITextProps {
  isBold?: boolean;
}

export interface IEditEventFormData {
  title: string;
  description: string;
  location: string;
  type: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  images: any;
  vacancies: number;
  ticketsPerPerson: number;
  faqs: string;
}
