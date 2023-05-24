import { IEvent } from 'src/types/events.types';

export interface IStatisticsProps {
  loading: boolean;
  eventData: IEvent | null;
  statisticsData: any;
}

export interface IRowProps {
  hasMargin?: boolean;
}
