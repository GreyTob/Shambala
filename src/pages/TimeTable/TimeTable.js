import React, { Component } from 'react'
import classes from './TimeTable.module.scss'
import container from '../../index.module.scss'
import TimeTableMonth from '../../components/TimeTableMonth/TimeTableMonth'
import { showCurrentDay } from '../../components/TimeTableMonth/currentDate'

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
      terapy: 'Йогатерапия',
      fitnes: 'Фитнес',
      plastic: 'Plastic dance',
    },
    tableToggle: true,
  }

  tableToggle = () => {
    this.setState({
      tableToggle: !this.state.tableToggle,
    })
    showCurrentDay()
  }

  render() {
    return (
      <section className={classes.TimeTable}>
        <div className={container.container}>
          <div className={classes.content}>
            {window.innerWidth < 767 ? (
              <select
                className={classes['select-css']}
                name="currentDay"
                id="currentDay"
              >
                <option value="1">Понедельник</option>
                <option value="2">Вторник</option>
                <option value="1">Среда</option>
                <option value="1">Четверг</option>
                <option value="1">Пятница</option>
                <option value="1">Суббота</option>
              </select>
            ) : (
              <select
                className={classes['select-css']}
                name="choiseTable"
                id="choiseTable"
                onChange={this.tableToggle}
              >
                <option value="month">Рассписание на месяц</option>
                <option value="day">Рассписание на сегодня</option>
              </select>
            )}

            <TimeTableMonth
              workout={this.state.workout}
              tableToggle={this.state.tableToggle}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default TimeTable
