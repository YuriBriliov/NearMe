import React from 'react'
import Card from '../Card/Card'
import classes from './servicesPage.module.css'
import { useSelector } from 'react-redux'

function ServicePage() {

  const cards = useSelector((state)=>{
    return state.cards
  })


  return (
    <>
    <h3 className={classes.title__block}>Title block</h3>
    <section className={classes.cards}>
        {cards.map((item)=>{
          return <Card key={item.id} {...item} />
        })}
{/*       
      <Card />
      <Card />
      <Card /> */}
    </section>
    </>
  )
}

export default ServicePage



