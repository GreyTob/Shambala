import React, { Component } from 'react'
import classes from './Cost.module.scss'
import container from '../../index.module.scss'

import price from '../../assets/price.jpg'

class Cost extends Component {
  render() {
    return (
      <section className={classes.Cost}>
        <div className={container.container}>
          <div className={classes.content}></div>
          <h2>Стоимость</h2>
          <img src={price} alt="стоимость" />
        </div>
      </section>
    )
  }
}

export default Cost
