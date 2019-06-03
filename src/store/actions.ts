import { MeaningOfLifeActions } from './meaningOfLife/types';
import { CaptainActions } from './captain/types';

export type Actions =
  | MeaningOfLifeActions
  | CaptainActions;
