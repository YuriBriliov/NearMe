import React from 'react'
import styles from './carddetailpage.module.css'
import pic from './klichko.jpg'

function CardDetailPage() {


  return (
    <div className={styles.detail_main_container}>
      <div className={styles.detail_img_block}>
        <img className={styles.detail_img} alt='serv-img' src={pic}/>
      </div>

      <div className={styles.detail_description}>
        <div className={styles.detail_title}>
          NOGOTO4KI
        </div>
        <div className={styles.detail_text}>
          тут самые лучше ноготочки! <br/>
          тут самые лучше ноготочки! <br/>
          тут самые лучше ноготочки! <br/>
          тут самые лучше ноготочки! <br/>
          тут самые лучше ноготочки! <br/>
        </div>
      </div>

      <div className={styles.detail_contacts}>
        <div> <i class="fab fa-instagram "></i> <span> @assholenails</span></div>
        <div> <i class="fab fa-whatsapp "></i> <span> +7 999 888 77 66</span></div>
        <div> <i class="fab fa-telegram-plane "></i> <span> @eatdrinkshitting</span></div>
      </div>
      <button>Message</button>
    </div>
  )
}

export default CardDetailPage
