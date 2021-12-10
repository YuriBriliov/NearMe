import React from 'react'
import useInput from '../../hooks/useInput'
import Input from '../Input/Input'
import styles from './register.module.css'

function Register(){
  const inputs = [
    useInput({ name: 'name', type: 'name', id: 'name'}),
    useInput({ name: 'email', type: 'email', id: 'email'}),
    useInput({ name: 'phone', type: 'phone', id: 'phone'}),
    useInput({ name: 'password', type: 'password', id: 'password'})
  ]

  return(
    <div className={styles.register_container}>
        <form className={styles.register_box}>
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

export default Register
