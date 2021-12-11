import React from 'react'
import styles from './carddetailpage.module.css'
import pic from './klichko.jpg'
import { useThemeContext } from '../../context/themeContext'

function CardDetailPage() {
  const { isLightTheme , setTheme} = useThemeContext()


  return (
    <>
    {isLightTheme &&  <div className={styles.detail_main_container_light}>
      <div className={styles.detail_img_block_light}>
        <img className={styles.detail_img_light} alt='serv-img' src={pic}/>
      </div>

      <div className={styles.detail_description_light}>
        <div className={styles.detail_title_light}>
          NOGOTO4KI
        </div>
        <div className={styles.detail_text_light}>
          тут самые лучше ноготочки! <br/>
          тут самые лучше ноготочки! <br/>
          тут самые лучше ноготочки! <br/>
          тут самые лучше ноготочки! <br/>
          тут самые лучше ноготочки! <br/>
        </div>
      </div>

      <div className={styles.detail_contacts_light}>
        <div> <i class="fab fa-instagram "></i> <span> @assholenails</span></div>
        <div> <i class="fab fa-whatsapp "></i> <span> +7 999 888 77 66</span></div>
        <div> <i class="fab fa-telegram-plane "></i> <span> @eatdrinkshitting</span></div>
      </div>
      <div className={styles.detail_button_block_light}>
        <button className={styles.button_light}>Message</button>
        <button className={styles.button_light}>Edit</button>
        <button className={styles.button_light}>Delete</button>
      </div>
    </div>}

    {!isLightTheme &&  <div className={styles.detail_main_container_dark}>
      <div className={styles.detail_img_block_dark}>
        <img className={styles.detail_img_dark} alt='serv-img' src={pic}/>
      </div>

      <div className={styles.detail_description_dark}>
        <div className={styles.detail_title_dark}>
          NOGOTO4KI
        </div>
        <div className={styles.detail_text_dark}>
          тут самые лучше ноготочки! <br/>
          тут самые лучше ноготочки! <br/>
          тут самые лучше ноготочки! <br/>
          тут самые лучше ноготочки! <br/>
          тут самые лучше ноготочки! <br/>
        </div>
      </div>

      <div className={styles.detail_contacts_dark}>
        <div> <i class="fab fa-instagram "></i> <span> @assholenails</span></div>
        <div> <i class="fab fa-whatsapp "></i> <span> +7 999 888 77 66</span></div>
        <div> <i class="fab fa-telegram-plane "></i> <span> @eatdrinkshitting</span></div>
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
