
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './card.module.css'


function Card({image, title, category, price, id}){

  

  return(
    <Link className={classes.moreBlock} to={`/card/${id}`}>
      <div className={classes.card_wrapper}>
        <img src={image} alt="" />
        <h3 className={classes.title}>
          {title}
        </h3>
        <div className={classes.title}>
          {category}
        </div>
        <div className={classes.title}>
          {price}
        </div>
      </div>
    </Link>
  )
}

export default Card
