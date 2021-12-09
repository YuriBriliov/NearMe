import React from 'react'
import classes from './card.module.scss'
function Card(){
  return(
    <div className={classes.card_wrapper}>
      <img src="https://i.ibb.co/GFcfRrK/Intersect.png" alt="" />
      <h3 className={classes.title}>
        title
      </h3>
      <div className={classes.title}>
        category
      </div>
      <div className={classes.title}>
        price
      </div>
    </div>
  )
}

export default Card
