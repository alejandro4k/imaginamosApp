import {createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer,applyMiddleware(thunk))
