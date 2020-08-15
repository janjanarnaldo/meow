import { all } from 'redux-saga/effects';
import breedSagas from './breed';
import catSagas from './cat';

export default function* rootSaga() {
  yield all([
    breedSagas(),
    catSagas(),
  ]);
}
