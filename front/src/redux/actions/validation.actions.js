import { SET_NUMBER, VALIDATE_SUCCESS, VALIDATE_ERROR } from '../types'

export const getCaptcha = () => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/signin`)
    const result = await response.text()

    dispatch({
      type: SET_NUMBER,
      payload: { number: result }
    })
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

export const validateUser = (current, reference) => (dispatch) => {

  if (String(current) === reference) {
    dispatch({
      type: VALIDATE_SUCCESS
    })
  } else {
    dispatch({
      type: VALIDATE_ERROR,
      payload: {
        error: 'Ты не прав/а, попробуй еще раз :('
      }
    })

    
  }

}
