import React from 'react'
import Card from '../Card/Card'
import classes from './servicesPage.module.css'

function ServicePage() {

  return (
    <>
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



