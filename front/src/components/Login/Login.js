import React from 'react'
import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
import styles from './Login.module.css'

function Login(){
  const inputs = [
    useInput({ name: 'email', type: 'email', id: 'email'}),
    useInput({ name: 'password', type: 'password', id: 'password'})
  ]
 
  return(
    <div className={styles.login_container}>
        <form className={styles.login_box}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
        <button variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
