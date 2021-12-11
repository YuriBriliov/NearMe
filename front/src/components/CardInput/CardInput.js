import React, { useState } from 'react'
import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
import styles from './cardinput.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewCard } from '../../redux/actions/cards.action'

function Cabinet() {

  const user = useSelector((state)=>{
    return state.user
  })

  const [category, setCategory] = useState()
  const categoryes = useSelector((state) => state.categoryes)

  const inputs = [
    useInput({ name: 'title', type: 'text', id: 'title'}),
    useInput({ name: 'text', type: 'text', id: 'text'}),
    useInput({ name: 'image', type: 'file', id: 'image'}),
    useInput({ name: 'price', type: 'text', id: 'price'}),
    useInput({ name: 'instagram', type: 'text', id: 'instagram'}),
    useInput({ name: 'whatsapp', type: 'text', id: 'whatsapp'}),
    useInput({ name: 'telegram', type: 'text', id: 'telegram'}),
  ]

  const dispatch = useDispatch()
  const navigate = useNavigate()


  function getCardData(event) {
    event.preventDefault()
    dispatch(addNewCard({
      title: inputs[0].getValue(),
      text: inputs[1].getValue(),
      image: 'https://i.ibb.co/GFcfRrK/Intersect.png',
      // image: inputs[2].getValue(),
      price: Number(inputs[3].getValue()),
      category_id: Number(category),
      user_id: user.value.id,
      instagram: inputs[4].getValue(),
      whatsapp: inputs[5].getValue(),
      telegram: inputs[6].getValue(),
      isActive: true
    }))
    navigate('/')
  }


  return (
    <div className={styles.card_input_container}>
      <form className={styles.card_input_box} onSubmit={getCardData}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
        <select onChange={(event)=>setCategory(event.target.value)}>
          {categoryes.map((el) => <option value={el.id}>{el.title}</option>)}
         </select>    
         <button variant="primary" type="submit">
           Submit
         </button>
      </form>
    </div>
 
  )


}

export default Cabinet
