import { combineReducers } from 'redux';

import posts from './posts';

const rootReducer = combineReducers({
  posts,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
