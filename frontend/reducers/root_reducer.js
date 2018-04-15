import { combineReducers } from 'redux';

import { charReducer } from './char_reducer.js';
import { documentReducer } from './document_reducer.js';
import { userReducer } from './user_reducer.js'

const entitiesReducer = combineReducers({
  chars: charReducer,
  users: userReducer,
  documents: documentReducer
})

export const rootReducer = combineReducers({
  entities: entitiesReducer
})
