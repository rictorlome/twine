import { combineReducers } from 'redux';

import { letterReducer } from './letter_reducer.js'

const entitiesReducer = combineReducers({
  letters: letterReducer,
})

export const rootReducer = combineReducers({
  entities: entitiesReducer
})
