interface Cat {
  id: string;
  url: string;
  breedId: string;
}

type Cats = Cat[];

type CurrentPage = number;
type HasMoreCats = Boolean;

interface CatState {
  list: Cats,
  cat: Cat | null,
  currentPage: CurrentPage;
  hasMoreCats: HasMoreCats;
}

interface CatApiShape {
  id: string;
  url: string;
  breeds: Breed[];
}
