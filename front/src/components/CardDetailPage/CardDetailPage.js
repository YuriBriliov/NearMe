import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './carddetailpage.module.css'
// import pic from './klichko.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useThemeContext } from '../../context/themeContext'

import { getCard } from '../../redux/actions/card.reducer'


function CardDetailPage() {
  const { isLightTheme, setTheme } = useThemeContext()
  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCard(Number(id)))
  },[])

  const cardData = useSelector((state)=>{
    return state.card
  })

  return (

    <>
    {isLightTheme &&  <div className={styles.detail_main_container_light}>
      <div className={styles.detail_img_block_light}>
          <img className={styles.detail_img_light} alt='serv-img' src={cardData.image}/>
      </div>

      <div className={styles.detail_description_light}>
        <div className={styles.detail_title_light}>
            {cardData.title}
        </div>
        <div className={styles.detail_text_light}>
            {cardData.text}
        </div>
      </div>

      <div className={styles.detail_contacts_light}>
          <div> <i class="fab fa-instagram "></i> <span> {cardData.instagram}</span></div>
          <div> <i class="fab fa-whatsapp "></i> <span> {cardData.whatsapp}</span></div>
          <div> <i class="fab fa-telegram-plane "></i> <span> {cardData.telegram}</span></div>
      </div>
      <div className={styles.detail_button_block_light}>
        <button className={styles.button_light}>Message</button>
        <button className={styles.button_light}>Edit</button>
        <button className={styles.button_light}>Delete</button>
      </div>
    </div>}

    {!isLightTheme &&  <div className={styles.detail_main_container_dark}>
      <div className={styles.detail_img_block_dark}>
          <img className={styles.detail_img_dark} alt='serv-img' src={cardData.image}/>
      </div>

      <div className={styles.detail_description_dark}>
        <div className={styles.detail_title_dark}>
          {cardData.title}
        </div>
        <div className={styles.detail_text_dark}>
          {cardData.text}
        </div>
      </div>
      <p>
        {cardData.price}
      </p>

      <div className={styles.detail_contacts_dark}>
        <div> <i class="fab fa-instagram "></i> <span> {cardData.instagram}</span></div>
        <div> <i class="fab fa-whatsapp "></i> <span> {cardData.whatsapp}</span></div>
        <div> <i class="fab fa-telegram-plane "></i> <span> {cardData.telegram}</span></div>
      </div>
      <div className={styles.detail_button_block_dark}>
        <button className={styles.button_dark}>Message</button>
        <button className={styles.button_dark}>Edit</button>
        <button className={styles.button_dark}>Delete</button>
      </div>
    </div>}
   
    </>
  )
}

export default CardDetailPage
