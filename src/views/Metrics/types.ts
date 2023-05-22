export interface IMetricsProps {
  eventsByStatus: any;
  eventsByMonth: any;
  year: number;
  setYear: (year: number) => void;
}

export interface IRowProps {
  hasMargin?: boolean;
}
