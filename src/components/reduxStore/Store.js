import { createStore, combineReducers } from 'redux'
import { LoginReducer } from './LoginReducer'

export const rootReducer = combineReducers({
  user: LoginReducer,
  
});

const store = createStore(LoginReducer)


export default store