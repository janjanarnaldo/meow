export const catMapperForUI = (data: CatApiShape) => {
  return {
    id: data.id,
    url: data.url,
    breedId: data.breeds[0].id,
  }
}
