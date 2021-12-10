import { SET_USER, SET_USER_ERROR, USER_LOGOUT } from '../types'

export const userReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_USER_ERROR: {
      const { error } = payload

      return {
        value: null,
        error
      }
    }

    case SET_USER: {
      const { user } = payload

      return {
        value: user,
        error: null
      }
    }

    case USER_LOGOUT: {
      return {
        value: null,
        error: null
      }
    }

    default: {
      return state
    }
  }
}
