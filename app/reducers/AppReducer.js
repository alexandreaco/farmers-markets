import { handleActions } from 'redux-actions';

import {
  GET_ALL,
} from '../constants';

const initialState = {
  locations: [],
};

export default handleActions({

  [GET_ALL]: (state, action) => ({
    ...state,
    locations: action.payload,
  }),

}, initialState);
