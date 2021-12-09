import React from 'react'
import Card from '../Card/Card'
import classes from './servicesPage.module.css'

function ServicePage() {

  return (
    <>
    <h3 className={classes.title__block}>Title block</h3>
    <section className={classes.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
    </>
  )
}

export default ServicePage



