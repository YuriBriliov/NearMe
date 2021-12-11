import styles from './places.module.css'
import Card from '../Card/Card'


function Places() {


  return (
    <div className={styles.places_main_container}>
        <div className={styles.places_sidebar}>
          <div className={styles.filter_block}>
            тут будут фильтры
          </div>
          <div className={styles.cards_block}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          </div>
        </div>

        <div className={styles.places_mapbox}>
      тут будет карта
        </div>
    </div>
  )

}

export default Places
