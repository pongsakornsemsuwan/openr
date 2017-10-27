import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import SessionReducer from './SessionReducer'

export default combineReducers({
  SessionReducer,
  form: formReducer  
})
