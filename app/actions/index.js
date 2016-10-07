import { createAction } from 'redux-actions';

import callApi, {
  GET_ALL_FARMS,
} from '../utils/api';

import {
  ADD_ALL_FARMS,
} from '../constants';

export const getAllFarms = createAction(ADD_ALL_FARMS, async () => callApi(GET_ALL_FARMS));
