import { ISchedule, IEvent } from 'src/types/events.types';

export interface ICreateEventProps {
  onSubmit: (formData: any) => void;
  reserveDate: Date;
  isEdit: boolean;
  setReserveDate: (date: Date) => void;
  eventInitialValues?: IEvent | null;
  deleteImage?: (image: any) => void;
  setModalSchedule: (modalSchedule: boolean) => void;
  schedule: ISchedule[];
}
export interface ICreateEventFormData {
  title: string;
  description: string;
  location: string;
  type: string;
  date: Date;
  startTime: Date | null;
  endTime: Date | null;
  images: any;
  vacancies: number;
  ticketsPerPerson: number;
  faqs: string;
}
