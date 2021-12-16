import { CHECK_USER, REGISTER_USER, SET_USER, SET_USER_ERROR, USER_LOGOUT } from '../types'

export const userReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case REGISTER_USER: {
      const { user } = payload
      console.log(user);
      return {
        value: user,
        error: null
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

    case CHECK_USER: {
      const { id, email, name } = payload
      return {
        value: {id, email, name},
        error: null
      }
    }

    case SET_USER_ERROR: {
      const { error } = payload
      return {
        value: null,
        error
      }
    }

    default: {
      return state
    }
  }
}
