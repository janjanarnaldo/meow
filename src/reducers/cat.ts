import * as catActions from '../actions/cat';

export const initialState: CatState = {
  list: [],
  currentPage: 1,
  hasMoreCats: false,
};

const reducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: CatState = initialState,
  action: catActions.Actions,
): CatState => {
  switch (action.type) {
    case catActions.SET_CATS: {
      // const existingCatIds = state.list.map(cat => cat.id);
      // const uniqueCats = action.payload.reduce((accum, curr) => {
      //   if (!existingCatIds.includes(curr.id)) return accum.concat(curr);
      //   return accum;
      // }, state);

      // return {
      //   ...state,
      //   list: [...uniqueCats],
      // }
      return {
        ...state,
        list: action.payload,
      };
    }
    case catActions.CLEAR_CATS: {
      return {
        ...state,
        list: [],
      };
    }
    case catActions.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    case catActions.SET_HAS_MORE_CATS: {
      return {
        ...state,
        hasMoreCats: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
