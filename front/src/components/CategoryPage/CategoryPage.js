import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import classes from './categorypage.module.css'

function ServicePage() {

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
    <section className={classes.cat_cards_block}>
    {icons.map((el) => <CategoryCard icon={el.icon} title={el.title}/> )}
    </section>
    </>
  )
}

export default ServicePage



