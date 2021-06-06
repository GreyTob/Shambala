import React, { Component } from 'react'
import classes from './TimeTable.module.scss'
import container from '../../index.module.scss'
import TimeTableMonth from '../../components/TimeTableMonth/TimeTableMonth'
import {
  showMonthToday,
  showCurrentDay,
  currentDay,
} from '../../components/TimeTableMonth/currentDate'

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
    isMonth: true,
    isMobile: false,
    isToday: false,
  }

  monthTodayToggle = () => {
    console.log('monthTodayToggle')
    if (document.querySelector('#choiseTable').value === 'month') {
      this.setState({
        isMonth: true,
      })
    } else {
      console.log('сегодня')
      this.setState({
        isMonth: false,
      })
    }

    showMonthToday(this.state.isMonth)
  }

  // dayToggle = () => {
  //   console.log('dayToggle')
  // }

  componentDidMount() {
    window.addEventListener('resize', () => {
      console.log('изменение размера страницы')
      console.log(this.state.isMobile)
      if (window.innerWidth < 767) {
        this.setState({
          isMobile: true,
        })
      } else {
        this.setState({
          isMobile: false,
        })
      }
    })
  }

  render() {
    console.log('TimeTable render')
    return (
      <section className={classes.TimeTable}>
        <div className={container.container}>
          <div className={classes.content}>
            {window.innerWidth < 767 ? (
              <select
                className={classes['select-css']}
                name="choiseTable"
                id="choiseTable"
                onChange={this.dayToggle}
              >
                <option value="currentDay" defaultValue>
                  Рассписание на сегодня
                </option>

                <option value="monday">Понедельник</option>
                <option value="tuesday">Вторник</option>
                <option value="wednesday">Среда</option>
                <option value="thursday">Четверг</option>
                <option value="friday">Пятница</option>
                <option value="saturday">Суббота</option>
              </select>
            ) : (
              <select
                className={classes['select-css']}
                name="choiseTable"
                id="choiseTable"
                onChange={this.monthTodayToggle}
              >
                <option value="month" defaultValue>
                  Рассписание на месяц
                </option>
                <option value="today">Рассписание на сегодня</option>
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
