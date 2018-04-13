import { combineReducers } from 'redux';

import { charReducer } from './char_reducer.js'

const entitiesReducer = combineReducers({
  chars: charReducer,
})

export const rootReducer = combineReducers({
  entities: entitiesReducer
})
