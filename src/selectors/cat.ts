export const cat = (state: RootState) => state.cat;
export const list = (state: RootState) => cat(state).list;
export const working = (state: RootState) => cat(state).cat;
export const currentPage = (state: RootState) => cat(state).currentPage;
export const hasMoreCats = (state: RootState) => cat(state).hasMoreCats;
