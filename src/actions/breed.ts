import { ActionsUnion } from './types';
import { createAction } from './actionHelpers';

export const LOAD_BREEDS = '[breed] load breeds';
export const SET_BREEDS = '[breed] set breeds';

export const Actions = {
  loadBreeds: () => createAction(LOAD_BREEDS),
  setBreeds: (breeds: BreedState) => createAction(SET_BREEDS, breeds),
};

export type Actions = ActionsUnion<typeof Actions>;
