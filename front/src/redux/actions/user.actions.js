import { CHECK_USER, REGISTER_USER, SET_USER, SET_USER_ERROR, USER_LOGOUT } from '../types'

const userError = (error) => ({
  type: SET_USER_ERROR,
  payload: { error }
})

export const registerNewUser = (user) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/sign_up`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      // credential для cors чтобы не ругался
      body: JSON.stringify(user)
    })
    if (response.status.ok) {
      const newUser = await response.json()
      dispatch({
        type: REGISTER_USER,
        payload: { newUser }
      })
    } else {
      dispatch(userError('Вы ввели неверные данные'))
    }
  } catch (error) {
    dispatch(userError('Ошибка при связи с сервером'))
  }
}

export const checkUser = () => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/check`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    if (response.ok) {
      const { id, name, email } = await response.json()
      dispatch({
        type: CHECK_USER,
        payload: { id, name, email }
      })
    }
  } catch (error) {
    console.log(error);
  }    
}

export const loginUser = (data) => async (dispatch) => {
  console.log(data);
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/sign_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    if (response.status.ok) {
      const result = await response.json()
      dispatch({
        type: SET_USER,
        payload: { user: result }
      })
    } else {
      dispatch(userError('Неверный логин или пароль'))
    }

  } catch (err) {
    dispatch(userError('Ошибка при связи с сервером'))
  }
}

export const userLogout = (user) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/logout`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(user)
    })
    if (response.ok) {
      dispatch({
        type: USER_LOGOUT
      })
    } else {
      dispatch(userError('Ошибка при выходе'))
    }
  } catch (error) {
    dispatch(userError('Ошибка при связи с сервером'))
  }
}



      // export const userLogout = () => async (dispatch) => {
      //   const response = await fetch(`${process.env.REACT_APP_API_URL}/logout`)
      
      //   if (response.ok) {
      //     dispatch({
      //       type: USER_LOGOUT
      //     })
      //   }
      // }
