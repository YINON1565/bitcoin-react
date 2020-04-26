import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './reducers/AppReducer';
import RobotReducer from './reducers/RobotReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  // users: UserReducer,
  robot: RobotReducer,
  app: AppReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default store