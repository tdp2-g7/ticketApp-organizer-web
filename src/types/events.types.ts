export interface IEvent {
  title: string;
  description: string;
  location: ILocation;
  type: string;
  date: Date;
  startTime: Date | null;
  endTime: Date | null;
  images: any;
  mainImage?: any;
  vacancies: number;
  ticketsPerPerson: number;
  faqs: string;
  schedule?: ISchedule[];
  userId?: string;
  eventId?: string;
  ticketsSold?: number;
  state?: number;
}

export interface IEventDefaultState {
  loading: boolean;
  events: IEvent[];
  data: any;
  maxPage: number;
  eventData: IEvent | null;
  drafts: IEvent[];
  locations: ILocationMap[];
  statisticsData: any;
  eventsByState: any;
  eventsByMonth: any;
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

export interface ILocationMap {
  location: ILocation;
  name: string;
}
