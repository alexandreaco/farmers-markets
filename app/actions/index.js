import { createAction } from 'redux-actions';

import {
  apiGetAll,
} from '../utils/api';

import {
  GET_ALL,
} from '../constants';

export const getAll = createAction(GET_ALL, apiGetAll);
