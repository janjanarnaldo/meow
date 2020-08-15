import { theCatApi, returnJSON } from './theCatApi';
import { breedMapperForUI } from '../mappers/breed';

export const getBreeds = async () => {
  const result = await theCatApi.get('/breeds');
  return (returnJSON(result) || []).map(breedMapperForUI);
}
