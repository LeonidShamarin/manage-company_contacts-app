import { createStore, combineReducers } from 'redux';
import contactsReducer from '../reducers/contacts';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer);

export default store;