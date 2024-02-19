/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/';

export const httpService = {
  get(endpoint: string, data: any = null) {
    return ajax(endpoint, 'GET', data);
  },
  post(endpoint: string, data: any = null) {
    return ajax(endpoint, 'POST', data);
  },
  put(endpoint: string, data: any = null) {
    return ajax(endpoint, 'PUT', data);
  },
  delete(endpoint: string, data: any = null) {
    return ajax(endpoint, 'DELETE', data);
  },
};

async function ajax(
  endpoint: string,
  method: string = 'GET',
  data: any,
): Promise<any> {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === 'GET' ? data : null,
    });

    return res.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`,
    );
    // eslint-disable-next-line no-console
    console.dir(err);
    throw err;
  }
}
