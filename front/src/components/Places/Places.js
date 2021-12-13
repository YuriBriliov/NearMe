import styles from './places.module.css'
import Card from '../Card/Card'
import { useThemeContext } from '../../context/themeContext'
import MapsTest from '../MapsTest/MapsTest'
import { useSelector } from 'react-redux'

function Places() {
  const { isLightTheme , setTheme} = useThemeContext()

  const cards = useSelector(state => {
    return state.cards
  })


  return (
    <>
    {isLightTheme && <div className={styles.places_main_container_light}>
    <div className={styles.places_sidebar_light}>
      <div className={styles.filter_block_light}>
        тут будут фильтры
      </div>
      <div className={styles.cards_block_light}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
      <div className={styles.cards_block_dark}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
