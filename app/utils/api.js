//---
// Farmers Markets API

import { API_URL } from '../config';

// API Routes
export const GET_ALL_FARMS = '/api';
export const GET_FARMS_BY_STATE = '/api/farms';

// API Caller
export const callApi = (route, params) => {
  const paramsString = params ? Object.keys(params).map(key => `${key}=${params[key]}`).join('&') : '';
  const url = `${API_URL}${route}?${paramsString}`;
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      return(json);
    })
    .catch(error => {
      console.warn(`callApi() : ${error}`)
    });
}

export default callApi;
