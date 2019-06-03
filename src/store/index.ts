import util from 'util';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';

import rootReducer from './rootReducer';

// https://github.com/reduxjs/redux-thunk/pull/247
declare module 'redux' {
  export interface Dispatch<A extends Action = AnyAction> {
    <TReturnType, TState, TExtraThunkArg, TBasicAction extends Action>(
      thunk: ThunkAction<TReturnType, TState, TExtraThunkArg, TBasicAction>
    ): TReturnType;
  }
};

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);

  console.log(util.inspect(action, { colors: true, depth: Infinity, compact: true }));
  console.log(store.getState());

  return result;
};

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);

export default store;
