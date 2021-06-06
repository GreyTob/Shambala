import React, { Component } from 'react'
import classes from './TimeTable.module.scss'
import container from '../../index.module.scss'
import TimeTableMonth from '../../components/TimeTableMonth/TimeTableMonth'
import {
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
    tableToggle: true,
    telephoneSize: false,
    // selectResizeToggle: true,
  }

  tableToggle = () => {
    if (document.querySelector('#choiseTable').value != 'month') {
      this.setState({
        tableToggle: false,
      })
    } else {
      this.setState({
        tableToggle: true,
      })
    }

    showCurrentDay()
  }

  selectTable = () => {
    return window.innerWidth < 767 ? (
      <select
        className={classes['select-css']}
        name="choiseTable"
        id="choiseTable"
        onChange={this.tableToggle}
      >
        <option value="today" defaultValue>
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
        onChange={this.tableToggle}
      >
        <option value="month" defaultValue>
          Рассписание на месяц
        </option>
        <option value="today">Рассписание на сегодня</option>
      </select>
    )
  }

  mainTable = () => {
    return (
      <TimeTableMonth
        workout={this.state.workout}
        tableToggle={this.state.tableToggle}
      />
    )
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      console.log('куышяу')
      showCurrentDay()
      this.selectTable()
      this.mainTable()

      // console.log('куышяу')
      // if (window.innerWidth < 767) {
      //   this.setState({
      //     selectResizeToggle: false,
      //     tableToggle: false,
      //   })
      // } else {
      //   this.setState({
      //     selectResizeToggle: true,
      //     tableToggle: true,
      //   })
      // }
    })
  }

  render() {
    return (
      <section className={classes.TimeTable}>
        <div className={container.container}>
          <div className={classes.content}>
            {this.selectTable()}
            {this.mainTable()}
          </div>
        </div>
      </section>
    )
  }
}

export default TimeTable
