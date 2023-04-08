export interface IEvent {
  title: string;
  description: string;
  // TODO: Change to a more specific type
  location: any;
  type: string;
  date: Date;
  startTime: Date | null;
  endTime: Date | null;
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
  eventData: IEvent | null;
}
