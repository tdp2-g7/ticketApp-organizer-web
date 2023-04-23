import { ILocation, ISchedule, IEvent } from 'src/types/events.types';

export interface ICreateEventProps {
  onSubmit: (formData: any) => void;
  reserveDate: Date;
  isEdit: boolean;
  setReserveDate: (date: Date) => void;
  eventInitialValues?: IEvent | null;
  deleteImage?: (image: any) => void;
  setModalSchedule: (modalSchedule: boolean) => void;
  schedule: ISchedule[];
  location: any;
  setLocation: (location: any) => void;
  setFormValues: (formValues: any) => void;
  onSaveDraft?: () => void;
}
export interface ICreateEventFormData {
  title: string;
  description: string;
  location: ILocation;
  type: string;
  date: Date;
  startTime: Date | null;
  endTime: Date | null;
  images: any;
  vacancies: number;
  ticketsPerPerson: number;
  faqs: string;
  ticketsSold?: any;
}
