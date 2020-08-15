import { theCatApi, returnJSON } from './theCatApi';
import { catMapperForUI } from '../mappers/cat';

export const getCats = async (breedId: Breed['id'], page: number) => {
  const params = { page, limit: 10, breed_id: breedId };
  const result = await theCatApi(
    { url: '/images/search', method: 'get', params },
  );
  return (returnJSON(result) || []).map(catMapperForUI);
}
