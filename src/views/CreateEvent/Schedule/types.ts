import { ISchedule } from 'src/types/events.types';

export interface IScheduleProps {
  onClose: () => void;
  onSubmit: any;
  modalSchedule: boolean;
  schedule?: ISchedule[]
}
