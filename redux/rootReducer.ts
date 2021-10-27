import {combineReducers} from 'redux';
import { moviesReducer } from './reducers/moviesReducer';
import { uiReducer } from './reducers/uiReducer';


const rootReducer = combineReducers({
  movies:moviesReducer,
  ui:uiReducer
});
export {rootReducer};
