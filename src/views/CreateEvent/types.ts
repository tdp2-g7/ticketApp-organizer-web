import { Dayjs } from 'dayjs';

export interface ICreateEventProps {
  onCreateEvent: (formData: ICreateEventFormData) => void;
  reserveDate: Date;
  setReserveDate: (date: Date) => void;
  location: any;
  setLocation: (location: any) => void;
  setEventStartTime: (startTime: any) => void;
  eventStartTime: Dayjs | null;
  setEventEndTime: (endTime: any) => void;
  eventEndTime: Dayjs | null;
}
export interface ICreateEventFormData {
  title: string;
  description: string;
  location: string;
  type: string;
  date: Date;
  time: string;
  image: any;
  vacancies: number;
  ticketsPerPerson: number;
  faqs: string;
}
