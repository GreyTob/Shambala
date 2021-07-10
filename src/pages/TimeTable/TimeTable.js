import React, { useState, useEffect } from 'react'
import classes from './TimeTable.module.scss'
import container from '../../index.module.scss'
import TimeTableMonth from '../../components/TimeTableMonth/TimeTableMonth'
import {
  showMonthToday,
  showCurrentDay,
} from '../../components/TimeTableMonth/currentDate'

const TimeTable = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setInnerWidth(e.target.innerWidth)
    })

    innerWidth < 767 ? showCurrentDay('currentDay') : showMonthToday('month')
  }, [innerWidth])

  return (
    <section className={classes.TimeTable}>
      <div className={container.container}>
        <div className={classes.content}>
          {innerWidth < 767 ? (
            <select
              className={classes['select-css']}
              name="choiseDayTable"
              id="choiseDayTable"
              onChange={(e) => showCurrentDay(e.target.value)}
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
              onChange={(e) => showMonthToday(e.target.value)}
            >
              <option value="month" defaultValue>
                Расписание на месяц
              </option>
              <option value="today">Расписание на сегодня</option>
            </select>
          )}
        </div>
        <TimeTableMonth />
      </div>
    </section>
  )
}

export default TimeTable
