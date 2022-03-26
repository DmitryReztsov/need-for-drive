import {api} from './config';

async function getApi(endpoint: string) {
  const response = await api.get(endpoint);
  return response.data.data;
}

export default getApi;
