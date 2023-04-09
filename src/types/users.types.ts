import { Role } from 'src/helpers/roles';

export interface IUser {
  userId: string;
  name: string;
  lastname: string;
  role: Role;
  email: string;
}

export interface IUserDefaultState {
  loading: boolean;
  user: IUser | null;
  data: any;
}
