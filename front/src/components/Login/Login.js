import React from 'react'
import styles from './Login.module.css'
function Login(){
 
  return(
    <form >
      <div className={styles.loginform}>
          <input className={styles.input} id='email' name='email' />
          <input className={styles.input} id='password' name='password' />

          <button variant="primary" type="submit">Submit </button>
      </div>
  </form>
  )
}

export default Login
