import { ActionsUnion } from './types';
import { createAction } from './actionHelpers';

export const LOAD_CATS = '[cat] load cats';
export const SET_CATS = '[cat] set cats';
export const CLEAR_CATS = '[cat] clear cats';

export const Actions = {
  loadCats: (breedId: Breed['id'], page: number) => createAction(LOAD_CATS, { breedId, page }),
  setCats: (cats: CatState) => createAction(SET_CATS, cats),
  clearCats: () => createAction(CLEAR_CATS),
};

export type Actions = ActionsUnion<typeof Actions>;
