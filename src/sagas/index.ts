import { all } from 'redux-saga/effects';
import breedSagas from './breed';

export default function* rootSaga() {
  yield all([
    breedSagas(),
  ]);
}
