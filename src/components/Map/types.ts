export interface IMapProps {
  onSearch?: (search: string) => void;
  lat?: number;
  lng?: number;
  isPreview?: boolean;
  multipleMarkers?: any;
  hasMultipleMarkers?: boolean;
}
