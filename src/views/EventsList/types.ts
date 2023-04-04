import { IEvent } from '../../types/events.types';

export interface IEventsList {
  events: IEvent[];
  maxPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
