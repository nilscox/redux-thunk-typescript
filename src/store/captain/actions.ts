import { logMessage } from '../../logging';
import { Dispatch, GetState } from '../thunk';
import {
  CHANGE_CAPTAIN,
  UPDATE_CAPTAIN,
  UpdateCaptain,
} from './types';

export const changeCaptain = (name: string, age: number) => ({
  type: CHANGE_CAPTAIN,
  name,
  age,
});

export const happyBirthdayCaptain = () => (dispatch: Dispatch, getState: GetState) => {
  const { captain } = getState();

  dispatch({ type: UPDATE_CAPTAIN, age: captain.age + 1 });
  logMessage('captain birthday');
};
