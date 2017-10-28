import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import SessionReducer from './SessionReducer'
import InventoryReducer from './InventoryReducer'
import PopularReducer from './PopularReducer'
import AssociationReducer from './AssociationReducer'
import CollaborativeReducer from './CollaborativeReducer'

export default combineReducers({
  SessionReducer,
  InventoryReducer,
  PopularReducer,
  AssociationReducer,
  CollaborativeReducer,
  form: formReducer  
})
