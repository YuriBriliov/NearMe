import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCard from '../CategoryCard/CategoryCard'
import classes from './categorypage.module.css'

import { selectAllCategorys } from '../../redux/actions/category.action'

function ServicePage() {

  const dispatch = useDispatch()

  const categoryes = useSelector((state) => state.categoryes)

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        dispatch(selectAllCategorys(data.data))
      })
  }, [])


  return (
    <>
    <section className={classes.cat_cards_block}>
        {categoryes.map((el) => <CategoryCard key={el.id} {...el}/> )}
    </section>
    </>
  )
}

export default ServicePage



