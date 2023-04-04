import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IEventDefaultState } from '../types/events.types';

interface IRootState {
  event: IEventDefaultState;
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
