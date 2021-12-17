import { combineReducers } from 'redux'
// import { validationReducer } from './validation.reducer'
import { userReducer, userAllReducer } from './user.reducer'
import { categoryesReducer } from './categoryes.reducer'
import { cardsReducer } from './cards.reducer'
import { cardReducer } from './card.reducer'
// import { categoryesReducer } from './categoryes.reducer'


export const rootReducer = combineReducers({
  user: userReducer,
  categoryes: categoryesReducer,
  cards: cardsReducer,
  card: cardReducer,
  userAll: userAllReducer
})
