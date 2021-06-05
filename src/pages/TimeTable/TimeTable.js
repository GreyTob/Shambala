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
    // selectResizeToggle: true,
  }

  tableToggle = () => {
    //если месяц то еру, если день то фолс
    // this.setState({
    //   tableToggle: !this.state.tableToggle,
    // })
    // if (document.querySelector('#choiseTable').value === 'month') {
    //   console.log('рассписание на месяц')
    //   // showCurrentDay()
    // }
    // if (document.querySelector('#choiseTable').value === 'day') {
    //   showCurrentDay()
    // }
    showCurrentDay()
  }

  componentDidMount() {
    // window.addEventListener('resize', () => {
    //   if (window.innerWidth < 767) {
    //     this.setState({
    //       selectResizeToggle: false,
    //     })
    //   } else {
    //     this.setState({
    //       selectResizeToggle: true,
    //     })
    //   }
    // })
    // SelectOptions()
  }

  render() {
    return (
      <section className={classes.TimeTable}>
        <div className={container.container}>
          <div className={classes.content}>
            <select
              className={classes['select-css']}
              name="choiseTable"
              id="choiseTable"
              onChange={this.tableToggle}
            >
              <option value="month" name="desktop" defaultValue>
                Рассписание на месяц
              </option>
              <option value="day" name="desktop">
                Рассписание на сегодня
              </option>
              <option value="monday">Понедельник</option>
              <option value="tuesday">Вторник</option>
              <option value="wednesday">Среда</option>
              <option value="thursday">Четверг</option>
              <option value="friday">Пятница</option>
              <option value="saturday">Суббота</option>
            </select>

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
