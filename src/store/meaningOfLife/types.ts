import { State } from '../state';

export const defaultState: State['meaningOfLife'] = 42;

export const SET_MEANING_OF_LIFE = 'set meaning of life';
export interface SetMeaningOfLife {
  type: typeof SET_MEANING_OF_LIFE;
  newValue: number;
}

export const LIFE_HAS_NO_MEANING = 'life has no meaning';
export interface LifeHasNoMeaning {
  type: typeof LIFE_HAS_NO_MEANING;
}

export type MeaningOfLifeActions =
  | SetMeaningOfLife
  | LifeHasNoMeaning;
