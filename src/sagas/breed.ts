import { all, put, takeEvery, call } from 'redux-saga/effects';
import {
  Actions as breedActions,
  LOAD_BREEDS,
} from '../actions/breed';

import * as breedService from '../services/breed';

export function* loadBreeds() {
  try {
    const breeds = yield call(breedService.getBreeds);
    yield put(breedActions.setBreeds(breeds));
  } catch (e) {
    console.error(e);
  }
}

export default function* breedSagas() {
  yield all([
    takeEvery(LOAD_BREEDS, loadBreeds),
  ]);
}
