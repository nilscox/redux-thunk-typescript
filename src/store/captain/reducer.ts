import { Reducer } from 'redux';

import { State } from '../state';
import {
  defaultState,
  CHANGE_CAPTAIN,
  UPDATE_CAPTAIN,
} from './types';

const reducer: Reducer<State['captain']> = (state = defaultState, action) => {
  switch (action.type) {

  case CHANGE_CAPTAIN:
    return {
      name: action.name,
      age: action.age,
    };

  case UPDATE_CAPTAIN:
    return {
      ...state,
      age: action.age,
    };

  default:
    return state;

  }
};

export default reducer;
