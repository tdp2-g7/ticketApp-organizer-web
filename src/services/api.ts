import axios from 'axios';
import { API_BASE_URL } from '../configs/configs';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

async function getOptions() {
  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
    withCredentials: true,
  };
  return options;
}

function errorResponse(error: any) {
  const { response } = error;
  let message = error;
  if (response) {
    const { data } = response;
    message = data.message;
  }
  return new Error(message);
}

export async function get(url: string, headers = {}): Promise<any> {
  try {
    const getToken = await getOptions();
    const options = { ...getToken, ...headers };
    const response = await api.get(url, options);
    return response;
  } catch (error: any) {
    throw errorResponse(error);
  }
}

export async function post(url: string, params = {}, headers = {}): Promise<any> {
  try {
    const getToken = await getOptions();
    const options = { ...getToken, ...headers };
    const response = await api.post(url, params, options);
    return response;
  } catch (error: any) {
    throw errorResponse(error);
  }
}

export async function put(url: string, params = {}, headers = {}): Promise<any> {
  try {
    const getToken = await getOptions();
    const options = { ...getToken, ...headers };
    const { data } = await api.put(url, params, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
}
