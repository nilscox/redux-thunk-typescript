import { Reducer } from 'redux';

import { State } from '../state';
import {
  defaultState,
  SET_MEANING_OF_LIFE,
  LIFE_HAS_NO_MEANING,
} from './types';

const reducer: Reducer<State['meaningOfLife']> = (state = defaultState, action) => {
  switch (action.type) {

  case SET_MEANING_OF_LIFE:
    return action.newValue;

  case LIFE_HAS_NO_MEANING:
    return null;

  default:
    return state;

  }
};

export default reducer;
