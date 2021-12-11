import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from '../Card/Card'
import classes from './servicesPage.module.css'
import { getAllCards } from '../../redux/actions/cards.action'

function ServicePage() {

  const cards = useSelector(state => {
    return state.cards
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCards())
  }, [])



  return (
    <>
    <h3 className={classes.title__block}>Title block</h3>
    <section className={classes.cards}>
        {cards.map((item)=>{
          return <Card key={item.id} {...item} />
        })}
    </section>
    </>
  )
}

export default ServicePage



