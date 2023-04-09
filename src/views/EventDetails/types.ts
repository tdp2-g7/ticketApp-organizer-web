import { IEvent } from '../../types/events.types';

export interface IEventDetailsProps {
  event: IEvent;
  scheduleModalOpen: boolean;
  setScheduleModalOpen: (value: boolean) => void;
  mapsModalOpen: boolean;
  setMapsModalOpen: (value: boolean) => void;
}

export interface IRowProps {
  hasMargin?: boolean;
}

export interface ITextProps {
  isBold?: boolean;
}
