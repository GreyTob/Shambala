import React, { Component } from 'react'
import classes from './TimeTable.module.scss'

import pic from '../../assets/time_table.jpg'

class TimeTable extends Component {
  render() {
    return (
      <section className={classes.TimeTable}>
        <img src={pic} alt="рассписание" />
      </section>
    )
  }
}

export default TimeTable
