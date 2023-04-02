import { all } from 'redux-saga/effects';
import { watchEvents } from './event.sagas';
import { watchUsers } from './user.sagas';

export default function* rootSaga(): Generator {
  yield all([
    watchUsers(),
    watchEvents(),
  ]);
}
