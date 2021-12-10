import React from 'react'
import useInput from '../../hooks/useInput'
import Input from '../Input/Input'
import styles from './editprofile.module.css'


function EditProfile(){

  const inputs = [
    useInput({ name: 'name', type: 'text', id: 'name'}),
    useInput({ name: 'email', type: 'email', id: 'email'}),
    useInput({ name: 'phone', type: 'text', id: 'phone'}),
    useInput({ name: 'password', type: 'text', id: 'password'}),
    useInput({ name: 'instagram', type: 'text', id: 'instagram'}),
    useInput({ name: 'whatsapp', type: 'text', id: 'whatsapp'}),
    useInput({ name: 'telegram', type: 'text', id: 'telegram'})
  ]



  return(
    // <div className={styles.editprofile_container}>
        <form className={styles.editprofile_box}>
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
    // </div>
  )
}

export default EditProfile
