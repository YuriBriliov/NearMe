import { SET_NUMBER, VALIDATE_SUCCESS, VALIDATE_ERROR } from '../types'

export const validationReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {

    case SET_NUMBER: {
      const { number } = payload

      return {
        error: null,
        value: false,
        number
      }
    }

    case VALIDATE_SUCCESS: {
      return {
        error: null,
        value: true,
        number: null
      }
    }

    case VALIDATE_ERROR: {
      const { error } = payload
      return {
        error,
        value: false,
        number: null
      }
    }

    default: {
      return state
    }
  }
}