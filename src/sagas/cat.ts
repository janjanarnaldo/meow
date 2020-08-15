import { all, put, takeEvery, call } from 'redux-saga/effects';

import {
  Actions as catActions,
  LOAD_CATS,
} from '../actions/cat';

import * as catService from '../services/cat';

export function* loadCats({
  payload
}: ReturnType<typeof catActions.loadCats>) {
  try {
    const { breedId, page } = payload;
    if (page === 1) yield put(catActions.clearCats());

    const cats = yield call(catService.getCats, breedId, page);
    yield put(catActions.setCats(cats));
  } catch (e) {
    console.error(e);
  }
}

export default function* catSagas() {
  yield all([
    takeEvery(LOAD_CATS, loadCats),
  ]);
}
