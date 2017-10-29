import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import SessionReducer from './SessionReducer'
import InventoryReducer from './InventoryReducer'
import PopularReducer from './PopularReducer'
import AssociationReducer from './AssociationReducer'
import CollaborativeReducer from './CollaborativeReducer'

const appReducer = combineReducers({
  SessionReducer,
  InventoryReducer,
  PopularReducer,
  AssociationReducer,
  CollaborativeReducer,
  form: formReducer  
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESSFUL') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;