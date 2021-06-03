import classes from './TimeTableMonth.module.scss'
import currentMonth from './currentMonth'

const TimeTableMonth = ({ workout }) => {
  return (
    <table className={classes.TimeTableMonth}>
      <caption>Рассписание занятий на {currentMonth()} </caption>

      <thead>
        <tr>
          <th>Время</th>
          <th>Понедельник</th>
          <th>Вторник</th>
          <th>Среда</th>
          <th>Четверг</th>
          <th>Пятница</th>
          <th>Суббота</th>
        </tr>
      </thead>

      <tbody>
        {/* 9:00 */}
        <tr>
          <td rowSpan="3">9:00</td>
          {/* понедельник */}
          <td>
            <div className={classes.oneTrain}>
              {workout.zGravity}
              <br />
              <a href="">Ольга</a>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha55}
              <br />
              <a href="">Наталья</a>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              <a href="">Вероника</a>
            </div>
          </td>
          {/* вторник */}
          <td>
            <div className={classes.oneTrain}>
              {workout.zGravity}
              <br />
              <a href="">Ольга</a>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              для начинающих
              <br />
              <a href="">Наталья</a>
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* среда */}
          <td>
            <div className={classes.oneTrain}>
              {workout.zGravity}
              <br />
              <a href="">Ольга</a>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha55}
              <br />
              <a href="">Наталья</a>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              <a href="">Вероника</a>
            </div>
          </td>
          {/* четверг */}
          <td>
            <div className={classes.oneTrain}>
              {workout.zGravity}
              <br />
              <a href="">Ольга</a>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              для начинающих
              <br />
              <a href="">Наталья</a>
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* пятница */}
          <td>
            <div className={classes.oneTrain}>
              {workout.zGravity}
              <br />
              <a href="">Ольга</a>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha55}
              <br />
              <a href="">Наталья</a>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              <a href="">Вероника</a>
            </div>
          </td>
          {/* суббота */}
          <td>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              <a href="">Вероника</a>
            </div>
            <div className={classes.oneTrain}>
              {workout.slim}
              <br />
              + гамаки
              <br />
              <a href="">Настя</a>
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
        </tr>
      </tbody>
      {/* подвал */}
      <tfoot>
        <tr>
          <td colSpan="7">
            Нa занятие со звездочкой нужна запись по тел.{' '}
            <a href="tel:+73519430470">+7&nbsp;(3519)&nbsp;43-04-70</a>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default TimeTableMonth
