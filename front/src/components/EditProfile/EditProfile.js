import React from 'react'
import useInput from '../../hooks/useInput'
import Input from '../Input/Input'
import styles from './editprofile.module.css'
import { useThemeContext } from '../../context/themeContext'


function EditProfile(){

  const { isLightTheme , setTheme} = useThemeContext()

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
    <>
    {isLightTheme &&  <form className={styles.editprofile_box_light}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
        <button className={styles.button_light} variant="primary" type="submit">
          Submit
        </button>
      </form>}

      {!isLightTheme &&  <form className={styles.editprofile_box_dark}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
        <button className={styles.button_dark}variant="primary" type="submit">
          Submit
        </button>
      </form>}
       
  
    </>
 
  )
}

export default EditProfile
