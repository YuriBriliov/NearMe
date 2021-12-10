import React from 'react'
import Card from '../Card/Card'
import classes from './servicesPage.module.css'
import { useSelector } from 'react-redux'

function ServicePage() {

  const cards = useSelector((state)=>{
    return state.cards
  })

  let arrCards = [
    {
      id: 1,
      image: 'https://i.ibb.co/GFcfRrK/Intersect.png',
      title: 'title',
      category: 'category',
      price: 'price'
    },
    {
      id: 2,
      image: 'https://i.ibb.co/GFcfRrK/Intersect.png',
      title: 'title',
      category: 'category',
      price: 'price'
    },
    {
      id: 3,
      image: 'https://i.ibb.co/GFcfRrK/Intersect.png',
      title: 'title',
      category: 'category',
      price: 'price'
    },
  ]


  return (
    <>
    <h3 className={classes.title__block}>Title block</h3>
    <section className={classes.cards}>
        {arrCards.map((item)=>{
          return <Card key={item.id} {...item} />
        })}
    </section>
    </>
  )
}

export default ServicePage



