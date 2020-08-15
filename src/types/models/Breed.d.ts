interface Breed {
  id: string;
  name: string;
}

interface BreedState {
  [index: number]: Breed;
}
