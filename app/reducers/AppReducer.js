import { handleActions } from 'redux-actions';

import {
  ADD_ALL_FARMS,
} from '../constants';

const initialState = {
  farms: [],
};

export default handleActions({

  [ADD_ALL_FARMS]: (state, action) => ({
    ...state,
    farms: action.payload,
  }),

}, initialState);
