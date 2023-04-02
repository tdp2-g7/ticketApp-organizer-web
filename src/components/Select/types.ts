export interface ISelectProps {
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  icon?: string;
  input: {
    value: string;
    onChange: (value: string) => void;
  };
  options: any;
  onChangeSelect?: (value: string) => void;
  meta: {
    touched?: boolean;
    error?: string;
  };
  variant?: 'outlined' | 'filled' | 'standard';
  label?: string;
  showError?: boolean;
  borders?: boolean;
  placeholder?: string;
}
export interface ICustomSelectProps {
  color?: string;
  backgroundcolor: string;
  error?: boolean;
  borders?: boolean;
}
