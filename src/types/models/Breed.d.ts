interface Breed {
  id: string;
  name: string;
}

type Breeds = Breed[];

type SelectedBreedId = string;

interface BreedState {
  list: Breeds;
  selectedBreedId: SelectedBreedId;
}

