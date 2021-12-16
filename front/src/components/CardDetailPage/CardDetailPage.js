import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './carddetailpage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useThemeContext } from '../../context/themeContext'
import { useNavigate } from 'react-router-dom'
import { getCard } from '../../redux/actions/card.reducer'
import { removeCard } from '../../redux/actions/cards.action'
import { updateCard, getAllCards } from '../../redux/actions/cards.action'



function CardDetailPage() {

  const { isLightTheme, setTheme } = useThemeContext()
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCard(Number(id)))
  }, [])
  const user = useSelector((state) => state.user.value)

  const cardData = useSelector((state) => {
    return state.card
  })

  const [isActive, setIsActive] = useState(true)

  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [instagram, setInstagram] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [telegram, setTelegram] = useState('')
  const [userId, setUserId] = useState('')


  useEffect(() => {
    setImage(cardData.image)
    setTitle(cardData.title)
    setText(cardData.text)
    setInstagram(cardData.instagram)
    setWhatsapp(cardData.whatsapp)
    setTelegram(cardData.telegram)
    setUserId(cardData.user_id)
  }, [cardData])


  const navigate = useNavigate()


  function deleteCard(id) {
    if (Number(user.id) === Number(cardData.user_id)) {
      dispatch(removeCard(id))
      navigate('/profilepage')
    } else {
      navigate(`/card/${id}`)
    }
  }

  function editCard(arg) {
    if (user.id == cardData.user_id) {
      dispatch(updateCard(arg))
      dispatch(getAllCards())
      navigate('/')
    } else {
      navigate(`/card/${id}`)
    }
  }

  function activateEdit(event) {
    setIsActive(false)
    // event.target.style.display = "none"
    // document.querySelector(`.${styles.sub__btn}`).style.display = 'block'
    // let data = [...document.querySelectorAll(`.${styles.input__detail_page}`)]
    // data.forEach((item)=>{
    //   item.removeAttribute('disabled')
    //   item.style.border = '2px solid #d6608c'
    // })
  }

  return (

    <>
      {isLightTheme && 
      <div className={styles.detail_main_container_light}>
          <div className={styles.detail_img_block_light}>
          <img className={styles.detail_img_light}
            onChange={(event) => setImage(event.target.value)} alt='serv-img' src={`http://localhost:3001/uploads/${image}`} />
        </div>

          <div className={styles.detail_info_light}>
            <div className={styles.detail_description_light}>
              <p>Название</p>
              <div className={styles.detail_title_light}>
                {/* {cardData.title} */}
                <input className={`${styles.input__detail_page_light} ${isActive ? '' : styles.visible__input_light}`} onChange={(event) => setTitle(event.target.value)} value={title} placeholder="Введите заголовок" disabled={isActive} />
              </div>
              <p>Описание</p>
              
                {/* {cardData.text} */}
                <textarea className={`${styles.input__textarea_page_light} ${isActive ? '' : styles.visible__input_light}`} onChange={(event) => setText(event.target.value)} value={text} placeholder="Введите описание" disabled={isActive} ></textarea>
        
            </div>


              <div className={styles.detail_contacts_light}>
                <p>Контакты</p>
                <div> <i className={`${styles.contact_icon} fab fa-instagram`}></i> <input className={`${styles.input__detail_page_light} ${isActive ? '' : styles.visible__input_light}`} onChange={(event) => setInstagram(event.target.value)} value={instagram} placeholder="instagram" disabled={isActive} /></div>
                <div> <i className={`${styles.contact_icon} fab fa-whatsapp`}></i> <input className={`${styles.input__detail_page_light} ${isActive ? '' : styles.visible__input_light}`} onChange={(event) => setWhatsapp(event.target.value)} value={whatsapp} placeholder="whatsapp" disabled={isActive} /></div>
                <div> <i className={`${styles.contact_icon} fab fa-telegram-plane`}></i> <input className={`${styles.input__detail_page_light} ${isActive ? '' : styles.visible__input_light}`} onChange={(event) => setTelegram(event.target.value)} value={telegram} placeholder="telegram" disabled={isActive} /></div>
              </div>


              <div className={styles.detail_button_block_light}>
                {user ?
                  <button className={styles.button_light}>Сообщение</button>
                  :
                  <></>
                }
                {Number(userId) === Number(user?.id) ?
                  <>
                    <button className={`${styles.button_light}  ${isActive ? '' : styles.deactiveBtn}`} onClick={activateEdit}>Редактировать</button>
                    <button className={styles.button_light} className={`${styles.button_light} ${isActive ? styles.deactiveBtn : ''}`} onClick={() => editCard({ id, image, title, text, instagram, whatsapp, telegram })}>Сохранить</button>
                    <button className={styles.button_light} onClick={() => { deleteCard(cardData.id) }}>Удалить</button>
                  </>
                  :
                  <></>
                }
              </div>
            </div>
        </div>

      }
      {!isLightTheme && 
      
        <div className={styles.detail_main_container_dark}>
            <div className={styles.detail_img_block_dark}>
              <img className={styles.detail_img_dark} onChange={(event) => setImage(event.target.value)} alt='serv-img' src={`http://localhost:3001/uploads/${image}`} />
            </div>
          <div className={styles.detail_info_dark}>
            
              <div className={styles.detail_description_dark}>
                <p>Название</p>
                <div className={styles.detail_title_dark}>
                  {/* {cardData.title} */}
                  <input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input_dark}`} onChange={(event) => setTitle(event.target.value)} value={title} placeholder="Введите заголовок" disabled={isActive} />
                </div>
                <p>Описание</p>
          
                  {/* {cardData.text} */}
                  <textarea className={`${styles.input__textarea_page_dark} ${isActive ? '' : styles.visible__input_dark}`} onChange={(event) => setText(event.target.value)} value={text} placeholder="Введите описание" disabled={isActive} ></textarea>
             
              </div>

                <div className={styles.detail_contacts_dark}>
                  <p>Контакты</p>
                  <div> <i className={`${styles.contact_icon} fab fa-instagram`}></i> <input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input_dark}`} onChange={(event) => setInstagram(event.target.value)} value={instagram} placeholder="instagram" disabled={isActive} /></div>
                  <div> <i className={`${styles.contact_icon} fab fa-whatsapp`}></i> <input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input_dark}`} onChange={(event) => setWhatsapp(event.target.value)} value={whatsapp} placeholder="whatsapp" disabled={isActive} /></div>
                  <div> <i className={`${styles.contact_icon} fab fa-telegram-plane`}></i> <input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input_dark}`} onChange={(event) => setTelegram(event.target.value)} value={telegram} placeholder="telegram" disabled={isActive} /></div>
                </div>


                <div className={styles.detail_button_block_dark}>
                  {user ?
                    <button className={styles.button_dark}>Сообщение</button>
                    :
                    <></>
                  }
                  {Number(userId) === Number(user?.id) ?
                    <>

                      <button className={`${styles.button_dark} ${isActive ? '' : styles.deactiveBtn}`} onClick={activateEdit}>Редактировать</button>
                      <button className={styles.button_dark} className={`${styles.button_dark}  ${isActive ? styles.deactiveBtn : ''}`} onClick={() => editCard({ id, image, title, text, instagram, whatsapp, telegram })}>Сохранить</button>
                      <button className={styles.button_dark} onClick={() => { deleteCard(cardData.id) }}>Удалить</button>
                    </>
                    :
                    <></>
                  }
                </div>


            </div>

            
            </div>
      }
   </>
  )
}

        export default CardDetailPage
