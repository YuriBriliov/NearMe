import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './carddetailpage.module.css'
// import pic from './klichko.jpg'
import { useDispatch, useSelector } from 'react-redux'

import { getCard } from '../../redux/actions/card.reducer'

function CardDetailPage() {
  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCard(Number(id)))
  },[])

  const cardData = useSelector((state)=>{
    return state.card
  })

  return (
    <div className={styles.detail_main_container} id={cardData.id}>
      <div className={styles.detail_img_block}>
        <img className={styles.detail_img} alt='serv-img' src={cardData.image}/>
      </div>

      <div className={styles.detail_description}>
        <div className={styles.detail_title}>
          {cardData.title}
        </div>
        <div className={styles.detail_text}>
          {cardData.text}
        </div>
      </div>
      <p>
        {cardData.price}
      </p>

      <div className={styles.detail_contacts}>
        <div> <i className="fab fa-instagram "></i> <span> {cardData.instagram}</span></div>
        <div> <i className="fab fa-whatsapp "></i> <span> {cardData.whatsapp}</span></div>
        <div> <i className="fab fa-telegram-plane "></i> <span> {cardData.telegram}</span></div>
      </div>
      <button>Message</button>
    </div>
  )
}

export default CardDetailPage
