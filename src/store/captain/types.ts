import { State } from '../state';

export const defaultState: State['captain'] = {
  name: 'jeanne',
  age: 21,
};

export const CHANGE_CAPTAIN = 'change captain';
export interface ChangeCaptain {
  type: typeof CHANGE_CAPTAIN;
  name: string;
  age: number;
}

export const UPDATE_CAPTAIN = 'update captain';
export interface UpdateCaptain {
  type: typeof UPDATE_CAPTAIN;
  age: number;
}

export type CaptainActions =
  | ChangeCaptain
  | UpdateCaptain;
