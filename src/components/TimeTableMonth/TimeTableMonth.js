import classes from './TimeTableMonth.module.scss'
import currentMonth from './currentMonth'

import { ReactSVG } from 'react-svg'
import Tippy from '@tippyjs/react'
// import 'tippy.js/dist/tippy.css'

import list from './assets/free-icon-note-book-1170169.svg'

const TimeTableMonth = ({ workout }) => {
  const time9 = '9:00'
  const time103 = '10:30'
  const time11 = '11:00'
  const time12 = '12:00'
  const time13 = '13:00'

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
          <td>{time9}</td>
          {/* понедельник */}
          <td>
            <div className={classes.oneTrain}>
              {workout.zGravity}
              <br />
              <a href="">Ольга</a>
              {time9}
              <Tippy content={<span>Предварительная запись</span>}>
                <div className={classes.svg}>
                  <ReactSVG src={list} />
                </div>
              </Tippy>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha55}
              <br />
              <a href="">Наталья</a>
              {time9}
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              <a href="">Вероника</a>
              {time9}
            </div>
          </td>
          {/* вторник */}
          <td>
            <div className={classes.oneTrain}>
              {workout.zGravity}
              <br />
              <a href="">Ольга</a>
              {time9}
              <Tippy content={<span>Предварительная запись</span>}>
                <div className={classes.svg}>
                  <ReactSVG src={list} />
                </div>
              </Tippy>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              для начинающих
              <br />
              <a href="">Наталья</a>
              {time9}
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
              {time9}
              <Tippy content={<span>Предварительная запись</span>}>
                <div className={classes.svg}>
                  <ReactSVG src={list} />
                </div>
              </Tippy>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha55}
              <br />
              <a href="">Наталья</a>
              {time9}
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              <a href="">Вероника</a>
              {time9}
            </div>
          </td>
          {/* четверг */}
          <td>
            <div className={classes.oneTrain}>
              {workout.zGravity}
              <br />
              <a href="">Ольга</a>
              {time9}
              <Tippy content={<span>Предварительная запись</span>}>
                <div className={classes.svg}>
                  <ReactSVG src={list} />
                </div>
              </Tippy>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              для начинающих
              <br />
              <a href="">Наталья</a>
              {time9}
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
              {time9}
              <Tippy content={<span>Предварительная запись</span>}>
                <div className={classes.svg}>
                  <ReactSVG src={list} />
                </div>
              </Tippy>
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha55}
              <br />
              <a href="">Наталья</a>
              {time9}
            </div>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              <a href="">Вероника</a>
              {time9}
            </div>
          </td>
          {/* суббота */}
          <td>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              <a href="">Вероника</a>
              {time9}
            </div>
            <div className={classes.oneTrain}>
              {workout.slim}
              <br />
              + гамаки
              <br />
              <a href="">Анастасия</a>
              {time9}
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
        </tr>
        {/* 10:30 */}
        <tr className={classes.even}>
          <td>{time103}</td>
          {/* понедельник */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* вторник */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* среда */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* четверг */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* пятница */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* суббота */}
          <td>
            <div className={classes.oneTrain}>
              {workout.hatha}
              <br />
              <a href="">Ольга</a>
              {time103}
            </div>
            <div className={classes.oneTrain}>
              {workout.kids}
              <br />
              в гамаках *
              <br />
              <a href="">Наталья</a>
              {time103}
            </div>
          </td>
        </tr>
        {/* 11:00 */}
        <tr>
          <td>{time11}</td>
          {/* понедельник */}
          <td>
            <div className={classes.oneTrain}>
              {workout.bodyMix}
              <br />
              Пилатес+стрейчинг
              <br />
              +МФР
              <br />
              <a href="">Анастасия</a>
              {time11}
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* вторник */}
          <td>
            <div className={classes.oneTrain}>
              {workout.helth}
              <br />
              в гамаках 55+ *
              <br />
              <a href="">Ольга</a>
              {time11}
              <Tippy content={<span>Предварительная запись</span>}>
                <div className={classes.svg}>
                  <ReactSVG src={list} />
                </div>
              </Tippy>
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* среда */}
          <td>
            <div className={classes.oneTrain}>
              {workout.bodyMix}
              <br />
              Пилатес+стрейчинг
              <br />
              +МФР
              <br />
              <a href="">Анастасия</a>
              {time11}
            </div>
            <div className={classes.oneTrain}>
              {workout.eastDance}
              <br />
              <a href="">Дарья</a>
              {time11}
            </div>
          </td>
          {/* четверг */}
          <td>
            <div className={classes.oneTrain}>
              {workout.helth}
              <br />
              в гамаках 55+ *
              <br />
              <a href="">Ольга</a>
              {time11}
              <Tippy content={<span>Предварительная запись</span>}>
                <div className={classes.svg}>
                  <ReactSVG src={list} />
                </div>
              </Tippy>
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* пятница */}
          <td>
            <div className={classes.oneTrain}>
              {workout.eastDance}
              <br />
              <a href="">Дарья</a>
              {time11}
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* суббота */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
        </tr>
        {/* 12:00 */}
        <tr className={classes.even}>
          <td>{time12}</td>
          {/* понедельник */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* вторник */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* среда */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* четверг */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* пятница */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* суббота */}
          <td>
            <div className={classes.oneTrain}>
              Plastic dance
              <br />
              <a href="">Лилия</a>
              {time12}
            </div>
          </td>
        </tr>
        {/* 13:00 */}
        <tr>
          <td>{time13}</td>
          {/* понедельник */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* вторник */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* среда */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* четверг */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* пятница */}
          <td>
            <div className={classes.oneTrainEmpty}>
              {/* //------empty-------------------- */}
            </div>
          </td>
          {/* суббота */}
          <td>
            <div className={classes.oneTrain}>
              {workout.acro}
              <br />
              <a href="">Ольга</a>
              {time13}
              <Tippy content={<span>Предварительная запись</span>}>
                <div className={classes.svg}>
                  <ReactSVG src={list} />
                </div>
              </Tippy>
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
