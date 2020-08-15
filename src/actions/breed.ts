import { ActionsUnion } from './types';
import { createAction } from './actionHelpers';

export const LOAD_BREEDS = '[breed] load breeds';
export const SET_BREEDS = '[breed] set breeds';
export const SET_SELECTED_BREED_ID = '[breed] set selected breed id';

export const Actions = {
  loadBreeds: () => createAction(LOAD_BREEDS),
  setBreeds: (breeds: Breeds) => createAction(SET_BREEDS, breeds),
  setSelectedBreedId: (id: Breed['id']) => createAction(SET_SELECTED_BREED_ID, id),
};

export type Actions = ActionsUnion<typeof Actions>;
