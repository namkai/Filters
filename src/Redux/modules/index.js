import { combineReducers } from 'redux';
import itineraries from './itineraries';

const rootReducer = combineReducers({
  itineraries,
});

export default rootReducer;
