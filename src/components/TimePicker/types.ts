export interface ITimePickerProps {
  disabled?: boolean;
  input: {
    onChange: (value: any) => void;
    name: string;
    value: any;
  };
  label?: string;
  meta: {
    touched?: boolean;
    error?: string;
  };
  onChangeInput?: (value: any) => void;
  showError?: boolean;
}

export interface IFormGroupProps {
  $spacing: boolean;
}
