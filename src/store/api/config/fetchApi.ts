import {api} from './config';

export async function getApi(endpoint: string) {
  const response = await api.get(endpoint);
  return response.data.data;
}

export async function postApi(endpoint: string, body: any) {
  const response = await api.post(endpoint, body);
  return response.data.data;
}
