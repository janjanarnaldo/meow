import * as breedActions from '../actions/breed';

export const initialState: BreedState = {
  list: [],
  selectedBreedId: '',
}

const reducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: BreedState = initialState,
  action: breedActions.Actions,
): BreedState => {
  switch (action.type) {
    case breedActions.SET_BREEDS: {
      return {
        ...state,
        list: [...action.payload],
      }
    }
    case breedActions.SET_SELECTED_BREED_ID: {
      return {
        ...state,
        selectedBreedId: action.payload,
      }
    }
    default:
      return state;
  }
};

export default reducer;
