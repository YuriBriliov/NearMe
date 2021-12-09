<<<<<<< HEAD
function Card() {


  return (

=======
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
>>>>>>> 931c9db7db90078361538c797807a40160dc8321
  )
}

export default Card
