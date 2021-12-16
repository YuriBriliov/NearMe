import styles from './places.module.css'
import Card from '../Card/Card'
import { useThemeContext } from '../../context/themeContext'


function Places() {
  const { isLightTheme , setTheme} = useThemeContext()


  return (
    <>
    {isLightTheme && <div className={styles.places_main_container_light}>
    <div className={styles.places_sidebar_light}>
      <div className={styles.filter_block_light}>
        тут будут фильтры
      </div>
      <div className={`${styles.cards_block_light} scroll_light`}>
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
        тут будет карта
          </div>
      </div>}

      {!isLightTheme && <div className={styles.places_main_container_dark}>
    <div className={styles.places_sidebar_dark}>
      <div className={styles.filter_block_dark}>
        тут будут фильтры
      </div>
      <div className={`${styles.cards_block_dark} scroll_dark`}>
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
