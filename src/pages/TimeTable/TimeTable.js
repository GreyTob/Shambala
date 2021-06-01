import React, { Component } from 'react'
import classes from './TimeTable.module.scss'
import container from '../../index.module.scss'
import TimeTableItem from '../../components/TimeTableItem/TimeTableItem'

// import pic from '../../assets/time_table.jpg'

class TimeTable extends Component {
  state = {}
  render() {
    return (
      <section className={classes.TimeTable}>
        <div className={container.container}>
          <div className={classes.content}>
            <TimeTableItem />
          </div>
        </div>
      </section>
    )
  }
}

export default TimeTable
