import React, { Component } from 'react'
import classes from './Main.module.scss'

import About from '../../components/About/About'
import Slider from '../../components/Slider/Slider'
import Contacts from '../../components/Contacts/Contacts'
// import SwipeR from '../../components/Swiper/SwipeR'

class Main extends Component {
  render() {
    return (
      <section className={classes.Main}>
        <About />
        <Slider />
        {/* <Teachers /> */}
        <Contacts />
        {/* <SwipeR /> */}
      </section>
    )
  }
}

export default Main
