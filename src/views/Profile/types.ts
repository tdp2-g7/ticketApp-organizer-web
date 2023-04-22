import { IUser } from 'src/types/users.types';

export interface IProfileProps {
  onEditProfile: (formData: any) => void;
  user: IUser | null;
}

export interface IEditProfileForm {
  name: string;
  description: string;
  image: string | any;
}
