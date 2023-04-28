import { IEvent, ILocationMap } from '../../types/events.types';

export interface IEventsList {
  events: IEvent[];
  drafts: IEvent[];
  maxPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  filters: any;
  setFilters: (filters: any) => void;
  handleFilters: () => void;
  locations: ILocationMap[];
  loading: boolean;
}

export interface ISelect {
  isPlaceholder?: boolean;
}
