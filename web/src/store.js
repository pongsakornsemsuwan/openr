import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {persistStore, autoRehydrate} from 'redux-persist'

var middleware
if(process.env.NODE_ENV !== 'production'){
  middleware = applyMiddleware( thunk, createLogger() )
}else{
  middleware = applyMiddleware( thunk )
}

// const store = compose(middleware)(createStore)(reducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(middleware, autoRehydrate())
);
persistStore(store, { whitelist: ['SessionReducer'] })

export default store
