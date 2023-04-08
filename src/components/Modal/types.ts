import { Sizes } from 'src/helpers/sizes';

export interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  isOpen: boolean;
  size?: Sizes;
}

export interface IModalStyledProps {
  size: Sizes;
}
