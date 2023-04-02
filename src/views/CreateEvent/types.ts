export interface ICreateEventProps {
  onCreateEvent: (formData: ICreateEventFormData) => void;
  reserveDate: Date;
  setReserveDate: (date: Date) => void;
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
  FAQs: string;
}
