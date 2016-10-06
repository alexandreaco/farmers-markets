//---
// Farmers Markets API

import { API_URL } from '../config';

// API Routes
export const GET_ALL_FARMS = '/api';

// API Caller
export const callApi = (route) => {
  const url = `${API_URL}${route}`;
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
