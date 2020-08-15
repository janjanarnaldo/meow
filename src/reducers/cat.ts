import * as catActions from '../actions/cat';

export const initialState: CatState = [];

const reducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: CatState = initialState,
  action: catActions.Actions,
): CatState => {
  switch (action.type) {
    case catActions.SET_CATS: {
      const existingCatIds = state.map(cat => cat.id);
      const uniqueCats = action.payload.reduce((accum, curr) => {
        if (!existingCatIds.includes(curr.id)) return accum.concat(curr);
        return accum;
      }, state);

      return uniqueCats;
    }
    case catActions.CLEAR_CATS: {
      return [];
    }
    default:
      return state;
  }
};

export default reducer;
