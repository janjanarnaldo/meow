import { all, put, takeEvery } from 'redux-saga/effects';

import {
  Actions as breedActions,
  LOAD_BREEDS,
} from '../actions/breed';

// import * as authApi from 'services/authApi';

export function* loadBreeds() {
  try {
    console.log('getting breeds');
    const breeds = [
      { name: 'Cat' },
    ];

    yield put(breedActions.setBreeds(breeds));
  } catch (e) {
    console.log(e);
  }
}

export default function* breedSagas() {
  yield all([
    takeEvery(LOAD_BREEDS, loadBreeds),
  ]);
}
