import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import classes from './categorypage.module.css'
import { useThemeContext } from '../../context/themeContext'

function ServicePage() {
  const { isLightTheme , setTheme} = useThemeContext()

  const icons = [
    {
      icon: 'fas fa-hand-paper fa-3x',
      title: 'nails'
    },
    {
      icon: 'fas fa-eye fa-3x',
      title: 'brows'
    },
    {
      icon: 'fas fa-grin-hearts fa-3x',
      title: 'make up'
    },
  ]

  return (
    <>
    {isLightTheme && <section className={classes.cat_cards_block_ligth}>
    {icons.map((el) => <CategoryCard icon={el.icon} title={el.title}/> )}
    </section>}

    {!isLightTheme && <section className={classes.cat_cards_block_dark}>
    {icons.map((el) => <CategoryCard icon={el.icon} title={el.title}/> )}
    </section>}
    
    </>
  )
}

export default ServicePage



