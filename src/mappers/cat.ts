export const catMapperForUI = (data: CatApiShape) => {
  const { id, url, breeds = [] } = data;
  const {
    id: breedId,
    name: breedName,
    origin: breedOrigin,
    temperament: breedTemperament,
    description: breedDescription,
  } = breeds[0];

  return {
    id,
    url,
    breedId,
    breedName,
    breedOrigin,
    breedTemperament,
    breedDescription,
  }
}
