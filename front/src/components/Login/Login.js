import React from 'react'
import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
import styles from './login.module.css'
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import {loginUser} from '../../redux/actions/user.actions'
import { useThemeContext } from '../../context/themeContext'

function Login(){
  const { isLightTheme , setTheme} = useThemeContext()

  const inputs = [
    useInput({ name: 'email', type: 'email', id: 'email'}),
    useInput({ name: 'password', type: 'text', id: 'password'})
  ]

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {error, value: user} = useSelector((state) => state.user)

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])


  function completeUser(e) {
    e.preventDefault();
    dispatch(loginUser({email: inputs[0].getValue(), password: inputs[1].getValue()}))
  }

  return(
    <>
    {isLightTheme && <div className={styles.login_container_light}>
        <form className={styles.login_box_light} onSubmit={completeUser}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
          {error}
        <button className={styles.button_light} variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>}

    {!isLightTheme && <div className={styles.login_container_dark}>
        <form className={styles.login_box_dark} onSubmit={completeUser}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
          {error}
        <button className={styles.button_dark} variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>}
    
    </>
  )
}

export default Login
