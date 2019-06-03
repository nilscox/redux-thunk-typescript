import { combineReducers } from 'redux';

import meaningOfLife from './meaningOfLife/reducer';
import captain from './captain/reducer';

export default combineReducers({
  meaningOfLife,
  captain,
});
