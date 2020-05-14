import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  a: (_, action) => action.payload || '',
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
