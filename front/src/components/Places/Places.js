import { useEffect, useState } from 'react'
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
  
  const [category, setCategory] = useState(1)
  const categoryes = useSelector((state) => state.categoryes)


  const [filterCategory, setFilterCategory] = useState([])
  const [filterKey, setFilterKey] = useState(0)
  
  
  useEffect(() => {
    setFilterCategory(cards)
  }, [])

  // console.log(filterCategory)

  useEffect(()=>{
    setTimeout(()=>{
      setFilterKey(prev => prev + 1)
    },50)
  }, [filterCategory])


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


  function getCategory(event){
    if (Number(event.target.value) === 1) {
      setCategory(Number(event.target.value))
      setFilterCategory(cards)
    } else {
      const filteredCards = cards.filter((item)=>{
        if(Number(item.category_id) === Number(event.target.value)){
          return item
        }
      })
      setCategory(Number(event.target.value))
      setFilterCategory(filteredCards)
    }
  }
  
  // console.log(category)

  return (
    <>
    {isLightTheme && <div className={styles.places_main_container_light}>
    <div className={styles.places_sidebar_light}>
      <div className={styles.filter_block_light}>
            <select onChange={getCategory} value={category}>
              {/* <option value="All">Все категории</option> */}
              {categoryes.map((el) => <option key={el.id} value={el.id}>{el.title}</option>)}
        </select>  
      </div>
      <div className={`${styles.cards_block_light} scroll_light`}>
            {filterCategory.map((item)=>{
              return <Card key={item.id} {...item} />
            })}
      

      </div>
    </div>

      <div className={styles.places_mapbox_light}>
          <MapsTest cards={filterCategory} select={category} />
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
