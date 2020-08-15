export const breed = (state: RootState) => state.breed;
export const list = (state: RootState) => breed(state).list;
export const selectedBreedId = (state: RootState) => breed(state).selectedBreedId;
