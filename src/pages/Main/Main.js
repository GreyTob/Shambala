import React, { Component } from 'react'
import classes from './Main.module.scss'
import contain from '../../index.module.scss'
import Slider from '../../components/Slider/Slider'
import SwipeR from '../../components/Swiper/SwipeR'

class Main extends Component {
  render() {
    return (
      <section className={classes.Main}>
        <div className={contain.contain}>
          <Slider />
          <SwipeR />
        </div>
      </section>
    )
  }
}

export default Main
