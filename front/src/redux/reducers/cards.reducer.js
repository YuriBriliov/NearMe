import { TAKE_ALL_CARDS, GET_CARD, ADD_NEW_CARD, COMPLETE_CARD, CHANGE_CARD } from '../types'

export const cardsReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case TAKE_ALL_CARDS: {
      const { cards } = payload
      return cards
    }

    case ADD_NEW_CARD: {
      const { card } = payload
      return [...state, card]
    }


    case CHANGE_CARD: {
      const { cards } = payload
      return [...state, cards]
    }


    case COMPLETE_CARD: {
      const { card } = payload
      return state.map((item) => {
        if (item.id === card.id) {
          return card
        } else {
          return item
        }
      })
    }

    default: {
      return state
    }
  }
}
