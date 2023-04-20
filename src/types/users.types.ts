export interface IUser {
  userId: string;
  name: string;
  lastName: string;
  email: string;
  description?: string;
  image?: any;
}

export interface IUserDefaultState {
  loading: boolean;
  user: IUser | null;
  data: any;
}
