export interface IEvent {
  title: string;
  description: string;
  location: ILocation;
  type: string;
  date: Date;
  time: string;
  image: any;
  vacancies: number;
  ticketsPerPerson: number;
  faqs: string;
  userId?: string;
  eventId?: string;
}

export interface IEventDefaultState {
  loading: boolean;
  events: IEvent[];
  data: any;
  maxPage: number;
}

export interface ILocation {
  lat: number;
  lng: number;
  label: string;
}
