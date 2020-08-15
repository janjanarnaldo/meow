interface Cat {
  id: string;
  url: string;
  breedId: string;
}

interface CatState {
  map(arg0: (cat: any) => any);
  reduce(arg0: (accum: any, curr: any) => void, state: CatState);
  [index: number]: Cat;
}

interface CatApiShape {
  id: string;
  url: string;
  breeds: Breed[];
}
