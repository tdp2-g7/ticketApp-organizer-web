import { IEvent } from '../../types/events.types';

export interface ICreateEventProps {
  onSubmit: (formData: ICreateEventFormData) => void;
  reserveDate: Date;
  isEdit: boolean;
  setReserveDate: (date: Date) => void;
  eventInitialValues?: IEvent | null;
}
export interface ICreateEventFormData {
  title: string;
  description: string;
  location: string;
  type: string;
  date: Date;
  startTime: Date | null;
  endTime: Date | null;
  image: any;
  vacancies: number;
  ticketsPerPerson: number;
  faqs: string;
}
