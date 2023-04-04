export interface IEvent {
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
  organizerId?: string;
  eventId?: string;
}

export interface IEventDefaultState {
  loading: boolean;
  events: IEvent[];
  data: any;
  maxPage: number;
}
