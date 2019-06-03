import { ThunkDispatch } from 'redux-thunk';

import { State } from './state';
import { Actions } from './actions';

export type Dispatch = ThunkDispatch<State, null, Actions>;
export type GetState = () => State;
