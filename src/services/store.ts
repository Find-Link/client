import { createStore, applyMiddleware } from 'redux';
import {
  MakeStore, createWrapper, HYDRATE,
} from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const globalReducer = (state, action): any => {// TODO: fix typings
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return reducers(state, action);
  }
};

const makeStore: MakeStore = () => {
  const store = createStore(globalReducer, applyMiddleware(thunk));
  return store;
};

const { withRedux, getStaticProps, getServerSideProps } = createWrapper(makeStore, { debug: true }); // TODO: remove debug flag

export { withRedux, getStaticProps, getServerSideProps };
