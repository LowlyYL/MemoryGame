import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { loadState } from '../localStorage';

const persistedState = loadState();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)),persistedState);