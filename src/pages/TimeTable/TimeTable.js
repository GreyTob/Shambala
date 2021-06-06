import React, { Component } from 'react'
import classes from './TimeTable.module.scss'
import container from '../../index.module.scss'
import TimeTableMonth from '../../components/TimeTableMonth/TimeTableMonth'
import {
  showMonthToday,
  showCurrentDay,
  dayHandler,
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
  //для desktop
  monthTodayToggle = () => {
    if (document.querySelector('#choiseTable').value === 'month') {
      this.setState({
        isMonth: true,
      })
    } else {
      this.setState({
        isMonth: false,
      })
    }
    showMonthToday(this.state.isMonth)
  }

  //для телефона
  dayToggle = () => {
    let value = document.querySelector('#choiseDayTable').value
    if (value === 'currentDay') {
      showCurrentDay(value)
    } else {
      showCurrentDay(value)
    }
  }

  componentDidMount() {
    //перерендеринг таблицы и section при изменении размера экрана
    window.addEventListener('resize', () => {
      // console.log('isMobile', this.state.isMobile)
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
                name="choiseDayTable"
                id="choiseDayTable"
                onChange={this.dayToggle}
              >
                <option value="currentDay" defaultValue>
                  Рассписание на сегодня
                </option>

                <option value="1">Понедельник</option>
                <option value="2">Вторник</option>
                <option value="3">Среда</option>
                <option value="4">Четверг</option>
                <option value="5">Пятница</option>
                <option value="6">Суббота</option>
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
              isToday={this.state.isToday}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default TimeTable
