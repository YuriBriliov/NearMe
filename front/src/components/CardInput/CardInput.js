import React, { useState } from 'react'
import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
import styles from './profile.module.css'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewCard } from '../../redux/actions/cards.action'

function Cabinet() {

  const inputs = [
    useInput({ name: 'name', type: 'text', id: 'name'}),
    useInput({ name: 'email', type: 'email', id: 'email'}),
    useInput({ name: 'password', type: 'password', id: 'password'}),
    useInput({ name: 'phone', type: 'text', id: 'phone'}),
  ]

  const categories = [
    'nails',
    'eyebrows',
    'make up'
  ]


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [text, setText] = useState('')


  function getTitle(event) {
    setTitle(event.target.value)
  }
  function getImage(event) {
    setImg(event.target.value)
  }
  function getText(event) {
    setText(event.target.value)
  }


  function getUserData(event) {
    event.preventDefault()
    dispatch(addNewCard({
      id,
      name,
      type,
      value,
      isFavourite: false
    }))
    navigate('/')
  }


  return (
    <div className={styles.card_input_container}>
    <form className={styles.card_input_box}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
         <select>
           {categories.map((el) => <option value={el}>{el}</option>)}
        </select>    
        <button variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>
 
  )


}

export default Cabinet
