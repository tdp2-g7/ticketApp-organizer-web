import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IUserDefaultState } from 'src/types/users.types';
import { IEventDefaultState } from '../types/events.types';

interface IRootState {
  event: IEventDefaultState;
  user: IUserDefaultState;
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
