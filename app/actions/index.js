import { createAction } from 'redux-actions';

import callApi, {
  GET_ALL_FARMS,
  GET_FARMS,
} from '../utils/api';

import {
  ADD_ALL_FARMS,
  ADD_FARMS,
} from '../constants';

export const getAllFarms = createAction(ADD_ALL_FARMS, async () => callApi(GET_ALL_FARMS));
export const getFarms = createAction(ADD_FARMS, async (options) => callApi(GET_FARMS, options));
