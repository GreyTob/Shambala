import React, { Component } from 'react'
import classes from './TimeTable.module.scss'
import container from '../../index.module.scss'
import TimeTableMonth from '../../components/TimeTableMonth/TimeTableMonth'
import TimeTableToday from '../../components/TimeTableToday/TimeTableToday'

// import pic from '../../assets/time_table.jpg'

class TimeTable extends Component {
  state = {
    workout: {
      zGravity: 'zGravity (Гамаки)*',
      hatha: 'Хатха-йога',
      hatha55: 'Хатха-йога 55+',
      slim: 'Стройнею с йогой',
      bodyMix: 'BODY MIX',
      helth: 'Группа здоровья',
      eastDance: 'Восточные танцы',
      kids: 'Детская йога',
      acro: 'Акройога*',
    },
    tableToggle: true,
  }

  tableToggle = () => {
    this.setState({
      tableToggle: !this.state.tableToggle,
    })
  }

  render() {
    return (
      <section className={classes.TimeTable}>
        <div className={container.container}>
          <div className={classes.content}>
            <select
              name="choiseTable"
              id="choiseTable"
              onChange={this.tableToggle}
            >
              <option value="month">Рассписание на месяц</option>
              <option value="day">Рассписание на сегодня</option>
            </select>
            {this.state.tableToggle ? (
              <TimeTableMonth workout={this.state.workout} />
            ) : (
              <TimeTableToday />
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default TimeTable
