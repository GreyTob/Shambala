import classes from './TimeTableItem.module.scss'
import currentMonth from './currentMonth'

const TimeTableItem = () => {
  return (
    <table className={classes.TimeTableItem}>
      <caption>Рассписание занятий на {currentMonth()} </caption>
    </table>
  )
}

export default TimeTableItem
