import { combineReducers } from 'redux'

import { headerReducer } from './headerReducer'
import { costReducer } from './costReducer'

export default combineReducers({
  headerReducer,
  costReducer,
})
