import { SET_USER, SET_USER_ERROR, USER_LOGOUT } from '../types'

export const loginUser = (data) => async (dispatch) => {

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      'credentials': 'include',
      body: JSON.stringify(data)
    })

    const result = await response.json()

    dispatch({
      type: SET_USER,
      payload: { user: result }
    })

  } catch (err) {
    dispatch({
      type: SET_USER_ERROR,
      payload: { error: 'Неверный логин или пароль' }
    })
  }
}

export const userLogout = () => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/logout`)

  if (response.ok) {
    dispatch({
      type: USER_LOGOUT
    })
  }
}