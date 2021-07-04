import React, { Component } from 'react'
import classes from './TimeTable.module.scss'
import container from '../../index.module.scss'
import TimeTableMonth from '../../components/TimeTableMonth/TimeTableMonth'
import {
  showMonthToday,
  showCurrentDay,
} from '../../components/TimeTableMonth/currentDate'
let date = new Date()

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
    // isToday: false,
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

    showCurrentDay(value)
  }

  componentDidMount() {
    //перерендеринг таблицы и section при изменении размера экрана
    if (window.innerWidth < 767) {
      this.setState({
        isMobile: false,
      })

      showCurrentDay(String(date.getDay()))
    } else {
      this.setState({
        isMobile: true,
      })
      showMonthToday(false)
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 767) {
        // console.log('if resize', window.innerWidth)

        this.setState({
          isMobile: false,
        })
        // showCurrentDay(String(date.getDay()))
      } else {
        // console.log('else resize', window.innerWidth)

        this.setState({
          isMobile: true,
        })
        showMonthToday(false)
      }
    })
  }

  render() {
    // console.log('TimeTable render')
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
                  Расписание на сегодня
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
                  Расписание на месяц
                </option>
                <option value="today">Рассписание на сегодня</option>
              </select>
            )}
            <TimeTableMonth workout={this.state.workout} />
          </div>
        </div>
      </section>
    )
  }
}

export default TimeTable
