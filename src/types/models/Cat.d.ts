interface Cat {
  id: string;
  url: string;
  breedId: string;
  breedName?: string;
  breedOrigin?: string;
  breedTemperament?: string;
  breedDescription?: string;
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
