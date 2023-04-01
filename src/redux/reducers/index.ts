import { combineReducers } from 'redux';
import eventReducer from './event.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
});

export default rootReducer;
