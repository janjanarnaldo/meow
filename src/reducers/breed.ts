import * as breedActions from '../actions/breed';

export const initialState: BreedState = [];

const reducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: BreedState = initialState,
  action: breedActions.Actions,
): BreedState => {
  switch (action.type) {
    case breedActions.SET_BREEDS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
