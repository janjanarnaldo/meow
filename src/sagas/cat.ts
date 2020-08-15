import { all, put, takeEvery, call, select } from 'redux-saga/effects';

import {
  Actions as catActions,
  LOAD_CATS,
  LOAD_CAT,
} from '../actions/cat';

import * as catService from '../services/cat';
import * as catSelectors from '../selectors/cat';

export function* loadCats({
  payload
}: ReturnType<typeof catActions.loadCats>) {
  try {
    const { breedId } = payload;
    const page = yield select(catSelectors.currentPage);

    if (page === 1) yield put(catActions.clearCats());

    const cats = yield call(catService.getCats, breedId, page);

    const existingCats = yield select(catSelectors.list);
    const existingCatIds = existingCats.map((cat: Cat) => cat.id);
    const uniqueCats = cats.reduce((accum: Cats, curr: Cat) => {
      if (!existingCatIds.includes(curr.id)) return accum.concat(curr);
      return accum;
    }, existingCats);

    yield put(catActions.setCats(uniqueCats));
    yield put(catActions.setHasMoreCats(existingCats.length !== uniqueCats.length));
  } catch (e) {
    console.error(e);
  }
}

export function* loadCat({
  payload
}: ReturnType<typeof catActions.loadCat>) {
  try {
    const { catId } = payload;
    const cat = yield call(catService.getCat, catId);
    yield put(catActions.setCat(cat));
  } catch (e) {
    console.error(e);
  }
}

export default function* catSagas() {
  yield all([
    takeEvery(LOAD_CATS, loadCats),
    takeEvery(LOAD_CAT, loadCat),
  ]);
}
