import { handleActions } from 'redux-actions';

import {
  ADD_ALL_FARMS,
  ADD_FARMS,
  CLEAR_FARMS,
} from '../constants';

const initialState = {
  farms: [],
};

export default handleActions({

  [ADD_ALL_FARMS]: (state, action) => ({
    ...state,
    farms: action.payload,
  }),

  [ADD_FARMS]: (state, action) => ({
    ...state,
    farms: action.payload,
  }),

  [CLEAR_FARMS]: () => ({
    ...initialState,
  }),

}, initialState);
