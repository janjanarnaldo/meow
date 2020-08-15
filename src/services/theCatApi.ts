import axios from 'axios';

interface Response {
  data: any;
}
export const returnJSON = (res: Response) => (res?.data ? res.data : undefined);

export const theCatApi = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    common: {
      Accept: 'application/json, *.*', 'Content-Type': 'application/json',
      'x-api-key': '033cb6b1-cd1f-479c-a539-175abcbd93f0',
    },
  },
});

theCatApi.interceptors.request.use(config => config, error => Promise.reject(error));
