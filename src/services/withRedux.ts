import { createStore, applyMiddleware } from 'redux';
import {
  MakeStore, createWrapper, HYDRATE,
} from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { client } from './withApollo';
import reducers from '../reducers';

const globalReducer = (state, action): any => { // TODO: fix typings
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return reducers(state, action);
  }
};

const makeStore: MakeStore = () => {
  const store = createStore(globalReducer, applyMiddleware(thunk.withExtraArgument(client)));
  return store;
};

const reduxStore = createWrapper(makeStore);
export const { withRedux } = reduxStore;

export default reduxStore;
