import { ActionsUnion } from './types';
import { createAction } from './actionHelpers';

export const LOAD_CATS = '[cat] load cats';
export const SET_CATS = '[cat] set cats';
export const CLEAR_CATS = '[cat] clear cats';
export const SET_CURRENT_PAGE = '[cat] set current page';
export const SET_HAS_MORE_CATS = '[cat] set has more cats';

export const Actions = {
  loadCats: (breedId: Breed['id'], page: number) => createAction(LOAD_CATS, { breedId, page }),
  setCats: (cats: Cats) => createAction(SET_CATS, cats),
  clearCats: () => createAction(CLEAR_CATS),
  setCurrentPage: (page: CurrentPage) => createAction(SET_CURRENT_PAGE, page),
  setHasMoreCats: (hasMoreCats: HasMoreCats) => createAction(SET_HAS_MORE_CATS, hasMoreCats),
};

export type Actions = ActionsUnion<typeof Actions>;
