import React from 'react'
import styles from './categorycard.module.css'
import { Link } from 'react-router-dom'

function CategoryCard({icon, title, id}){

  return(
    <Link className={styles.cat_link} to={`/places/${id}`}>
      <div className={styles.cat_card_wrapper}>
        <div id='cat_item' className={styles.cat_icon}> 
            <i className={icon}></i>
        </div>
        <div className={styles.cat_title}> 
          {title}
        </div>
      </div>
    </Link>
    )
}

export default CategoryCard


