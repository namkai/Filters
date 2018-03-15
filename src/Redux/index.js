import { createStore } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const store = createStore(rootReducer, composeWithDevTools());

export default store;