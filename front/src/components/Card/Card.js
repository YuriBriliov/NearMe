import React from 'react'
import classes from './card.module.css'
import { useThemeContext } from '../../context/themeContext'


function Card(){
    const { isLightTheme , setTheme} = useThemeContext()



  return(
    <>
    {isLightTheme &&  <div className={classes.card_wrapper_light}>
      <img src="https://i.ibb.co/GFcfRrK/Intersect.png" alt="" />
      <h3 className={classes.title_light}>
        title
      </h3>
      <div className={classes.title_light}>
        category
      </div>
      <div className={classes.title_light}>
        price
      </div>
    </div>}

    {!isLightTheme &&  <div className={classes.card_wrapper_dark}>
      <img src="https://i.ibb.co/GFcfRrK/Intersect.png" alt="" />
      <h3 className={classes.title_dark}>
        title
      </h3>
      <div className={classes.title_dark}>
        category
      </div>
      <div className={classes.title_dark}>
        price
      </div>
    </div>}
   
  </>

  )
}

export default Card
