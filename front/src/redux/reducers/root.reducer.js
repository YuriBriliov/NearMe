import { combineReducers } from 'redux'
// import { validationReducer } from './validation.reducer'
import { userReducer } from './user.reducer'


export const rootReducer = combineReducers({
  // validation: validationReducer,
  user: userReducer
})
