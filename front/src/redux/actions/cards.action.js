import { TAKE_ALL_CARDS, GET_CARD, ADD_NEW_CARD, COMPLETE_CARD, CHANGE_CARD, DELETE_CARD } from '../types'

export const selectAllCards = (cards) => ({
  type: TAKE_ALL_CARDS,
  payload: { cards }
})

export const selectCard = (card) => ({
  type: GET_CARD,
  payload: { card }
})

export const likeCard = (card) => ({
  type: COMPLETE_CARD,
  payload: { card }
})

export const changeCard = (cards) => ({
  type: CHANGE_CARD,
  payload: { cards }
})

export const addCard = (card) => ({
  type: ADD_NEW_CARD,
  payload: { card }
})

export const deleteCard = (card) => ({
  type: DELETE_CARD,
  payload: { card }
})


export const getAllCards = () => async (dispatch) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card/`, options)
    const cards = await response.json()
    dispatch(selectAllCards(cards))
  } catch (error) {
    console.log(error)
  }
}

export const addNewCard = (card) => async (dispatch) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(card)
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card/`, options)
    const newCard = await response.json()
    dispatch(addCard(newCard))
  } catch (error) {
    console.log(error)
  }
}

export const addLike = (id) => async (dispatch) => {
  try {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card/${id}`, options)
    const card = await response.json()
    dispatch(likeCard(card))
  } catch (error) {
    console.log(error)
  }
}

export const removeCard = (id) => async (dispatch) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card/${id}`, options)
    const card = await response.json()
    dispatch(deleteCard(card))
  } catch (error) {
    console.log(error)
  }
}

export const getCard = (id) => async (dispatch) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card/${id}`, options)
    const cardPost = await response.json()
    dispatch(selectCard(cardPost))
  } catch (error) {
    console.log(error)
  }
}

export const updateCard = ({ id, title, text, img, isFavourite }) => async (dispatch) => {
  try {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ id, title, text, img, isFavourite })
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card/${id}`, options)
    const cardPost = await response.json()

    dispatch(changeCard(cardPost))
  } catch (error) {

  }
}
