import { trackEvent } from '../../tracking';
import { Dispatch } from '../thunk';
import {
  SET_MEANING_OF_LIFE,
  LIFE_HAS_NO_MEANING,
  LifeHasNoMeaning,
} from './types';

export const setMeaningOfLife = (value: number) => ({
  type: SET_MEANING_OF_LIFE,
  newValue: value,
});

export const lifeHasNoMeaning = () => async (dispatch: Dispatch) => {
  await trackEvent('life has no meaning');
  dispatch({ type: LIFE_HAS_NO_MEANING });
};
