import { all, put, takeEvery, call } from 'redux-saga/effects';
import {
  Actions as breedActions,
  LOAD_BREEDS,
} from '../actions/breed';

import * as breedService from '../services/breed';

// import * as catSagas from './cat';

export function* loadBreeds() {
  try {
    const breeds = yield call(breedService.getBreeds);
    yield put(breedActions.setBreeds(breeds));
  } catch (e) {
    console.error(e);
  }
}

// export function* setSelectedBreedId() {
//   try {
//     const breedId = yield select(breedSelectors.selectedBreedId);
//     yield call(catSagas.loadCats, { payload: { breedId } });
//     console.log(breedId, '<< breedId');
//   } catch(e) {
//     console.error(e);
//   }
// }

export default function* breedSagas() {
  yield all([
    takeEvery(LOAD_BREEDS, loadBreeds),
  ]);
}
