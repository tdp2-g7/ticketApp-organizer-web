export interface IEvent {
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
  schedule?: ISchedule[];
  userId?: string;
  eventId?: string;
}

export interface IEventDefaultState {
  loading: boolean;
  events: IEvent[];
  data: any;
  maxPage: number;
  eventData: IEvent | null;
  drafts: IEvent[];
}

export interface ISchedule {
  startTime: Date;
  endTime: Date;
  description: string;
}

export interface ILocation {
  lat: number | string;
  lng: number | string;
  label: string;
}
