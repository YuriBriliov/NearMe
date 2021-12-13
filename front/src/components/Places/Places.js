import { useEffect } from 'react'
import styles from './places.module.css'
import Card from '../Card/Card'
import { useThemeContext } from '../../context/themeContext'
import MapsTest from '../MapsTest/MapsTest'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Places() {
  const { isLightTheme , setTheme} = useThemeContext()
  const navigate = useNavigate()
  const cards = useSelector(state => {
    return state.cards
  })

  function detailOnMap(event) {
    event.preventDefault()
    if (event.target.tagName === 'BUTTON') {
      navigate(`/card/${event.target.dataset.id}`)
    }
  }


  let cardOnMap
  useEffect(()=>{
    cardOnMap = document.querySelector(`.${styles.places_mapbox_light}`)
    cardOnMap.addEventListener('click', detailOnMap)
  },[])
  
  

  return (
    <>
    {isLightTheme && <div className={styles.places_main_container_light}>
    <div className={styles.places_sidebar_light}>
      <div className={styles.filter_block_light}>
        тут будут фильтры
      </div>
      <div className={`${styles.cards_block_light} scroll_light`}>
            {cards.map((item)=>{
              return <Card key={item.id} {...item} />
            })}
      

      </div>
    </div>

      <div className={styles.places_mapbox_light}>
        <MapsTest cards={cards} />
      </div>
    </div>}

      {!isLightTheme && <div className={styles.places_main_container_dark}>
    <div className={styles.places_sidebar_dark}>
      <div className={styles.filter_block_dark}>
        тут будут фильтры
      </div>
      <div className={`${styles.cards_block_dark} scroll_dark`}>
      <Card />

      </div>
    </div>

          <div className={styles.places_mapbox_dark}>
        тут будет карта
          </div>
      </div>}


</>
    
  )

}

export default Places
