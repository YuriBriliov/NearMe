import React, { useEffect, useState } from 'react'
import useInput from '../../hooks/useInput'
import Input from '../Input/Input'
import styles from './editprofile.module.css'
import { useThemeContext } from '../../context/themeContext'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, getUser, updateUserinDB } from '../../redux/actions/user.actions'
import { useNavigate } from 'react-router-dom'




function EditProfile(){

  const { isLightTheme , setTheme} = useThemeContext()

  const user = useSelector((state) => state.user.value)  
  const { error } = useSelector((state) => state.userAll)
  console.log(error);
  const userAll  = useSelector((state) => state.userAll.value)

  const [isActive, setIsActive] = useState(true)

  const dispatch = useDispatch()
  const navigate = useNavigate()
 

  // const inputs = [
  //   useInput({ name: 'Имя', type: 'text', id: 'name'}),
  //   useInput({ name: 'email', type: 'email', id: 'email'}),
  //   useInput({ name: 'Телефон', type: 'text', id: 'phone'}),
  //   useInput({ name: 'Пароль', type: 'text', id: 'password'}),
  // ]

  const [userName, setName] = useState('')
  const [userEmail, setEmail] = useState('')
  const [userPhone, setPhone] = useState('')
  const [userPass, setPass] = useState('')
  const [userNewPass, setNewPass] = useState('')


  function activateEdit() {

    setIsActive(false)
  }

  useEffect(() => {
    dispatch(getUser(user.id))
  }, [])

  useEffect(() => {
    if(userAll) {
      setName(userAll.name)
      setEmail(userAll.email)
      setPhone(userAll.phone)
    
    }
  }, [userAll])

  //  useEffect(() => {
  //   if (error) {
  //     navigate('/profilepage')
  //   }
  // }, [error])


  function editUser(arg) {
    // dispatch(updateUserinDB(arg))
  }

  return(
    <>
    {isLightTheme &&  <form className={styles.editprofile_box_light}>

    <input className={`${styles.input_edit_profile_light} ${isActive ? '' : styles.visible_input_light}`} onChange={(event) => setName(event.target.value)} value={userName} placeholder="Введите имя" disabled={isActive} />
    <input className={`${styles.input_edit_profile_light} ${isActive ? '' : styles.visible_input_light}`} onChange={(event) => setEmail(event.target.value)} value={userEmail} placeholder="Введите email" disabled={isActive} />
    <input className={`${styles.input_edit_profile_light} ${isActive ? '' : styles.visible_input_light}`} onChange={(event) => setPhone(event.target.value)} value={userPhone} placeholder="Введите номер телефона" disabled={isActive} />
    <input className={`${styles.input_edit_profile_light} ${isActive ? '' : styles.visible_input_light}`} onChange={(event) => setPass(event.target.value)} value={userPass} type='password' placeholder="Текущий  пароль" disabled={isActive} />
    <input className={`${styles.input_edit_profile_light} ${isActive ? '' : styles.visible_input_light}`} onChange={(event) => setNewPass(event.target.value)} type='password' placeholder="Новый пароль" disabled={isActive} />
    { error } 
    <button type='button' className={`${styles.button_light}  ${isActive ? '' : styles.deactiveBtn}`} onClick={activateEdit}>Редактировать</button>
    <button  type='button' className={styles.button_light} className={`${styles.button_light} ${isActive ? styles.deactiveBtn : ''}`} onClick={() => editUser({ id: user.id, userName, userEmail, userPhone, userPass, userNewPass })}>Сохранить</button>

      </form>}

      {!isLightTheme &&  <form className={styles.editprofile_box_dark}>

      <input className={`${styles.input_edit_profile_dark} ${isActive ? '' : styles.visible_input_dark}`} onChange={(event) => setName(event.target.value)} value={userName} placeholder="Введите имя" disabled={isActive} />
      <input className={`${styles.input_edit_profile_dark} ${isActive ? '' : styles.visible_input_dark}`} onChange={(event) => setEmail(event.target.value)} value={userEmail} placeholder="Введите email" disabled={isActive} />
      <input className={`${styles.input_edit_profile_dark} ${isActive ? '' : styles.visible_input_dark}`} onChange={(event) => setPhone(event.target.value)} value={userPhone} placeholder="Введите номер телефона" disabled={isActive} />
      <input className={`${styles.input_edit_profile_dark} ${isActive ? '' : styles.visible_input_dark}`} onChange={(event) => setPass(event.target.value)} value={userPass}  type='password' placeholder="Текущий  пароль" disabled={isActive} />
      <input className={`${styles.input_edit_profile_dark} ${isActive ? '' : styles.visible_input_dark}`} onChange={(event) => setNewPass(event.target.value)}  type='password' placeholder="Новый пароль" disabled={isActive} />
      { error } 
      <button  type='button' className={`${styles.button_dark}  ${isActive ? '' : styles.deactiveBtn}`} onClick={activateEdit}>Редактировать</button>
      <button type='button'  className={styles.button_dark} className={`${styles.button_dark} ${isActive ? styles.deactiveBtn : ''}`} onClick={() => editUser({ id: user.id, userName, userEmail, userPhone, userPass, userNewPass })}>Сохранить</button>

      </form>}
    </>
 
  )
}

export default EditProfile
