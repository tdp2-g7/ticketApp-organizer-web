import { IEvent } from '../../types/events.types';

export interface IEventDetailsProps {
  event: IEvent;
  scheduleModalOpen: boolean;
  setScheduleModalOpen: (value: boolean) => void;
}

export interface IRowProps {
  hasMargin?: boolean;
}
