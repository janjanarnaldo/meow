interface Breed {
  id: string;
  name: string;
  origin?: string;
  temperament?: string;
  description?: string;
}

type Breeds = Breed[];

type SelectedBreedId = string;

interface BreedState {
  list: Breeds;
  selectedBreedId: SelectedBreedId;
}

