import React from 'react'
import classes from './TimeTableMonth.module.scss'
import './days.scss'
import { currentMonth } from './currentDate'
import {
  iconTel,
  time9,
  time103,
  time11,
  time12,
  time13,
  time18,
  time183,
  time1915,
  time193,
  linkOlga,
  linkPushka,
  linkVeronika,
  workout,
} from './constants'

//
import { ReactSVG } from 'react-svg'
import sunbed from '../../pages/TimeTable/assets/sunbed.svg'

const TimeTableMonth = () => (
  <table className={classes.TimeTableMonth}>
    <caption>Расписание занятий {currentMonth()}</caption>
    <thead>
      <tr>
        <th>Время</th>
        <th name="monday">Понедельник</th>
        <th name="tuesday">Вторник</th>
        <th name="wednesday">Среда</th>
        <th name="thursday">Четверг</th>
        <th name="friday">Пятница</th>
        <th name="saturday">Суббота</th>
        <th name="sunday" className="sunday">
          Воскресенье
        </th>
      </tr>
    </thead>

    <tbody>
      {/* 9:00 */}
      <tr>
        <td>{time9}</td>
        {/* понедельник */}
        <td name="monday">
          <div className={classes.oneTrain}>
            {workout.zGravity}
            <br />
            {linkOlga}
            {time9}
            {iconTel}
          </div>
          <div className={classes.oneTrain}>
            {workout.hatha55}
            <br />
            <a href="#">Наталья</a>
            {time9}
          </div>
          <div className={classes.oneTrain}>
            {workout.hatha}
            <br />
            {linkVeronika}
            {time9}
          </div>
        </td>
        {/* вторник */}
        <td name="tuesday">
          <div className={classes.oneTrain}>
            {workout.zGravity}
            <br />
            {linkOlga}
            {time9}
            {iconTel}
          </div>
          <div className={classes.oneTrain}>
            {workout.hatha}
            <br />
            для начинающих
            <br />
            <a href="#">Наталья</a>
            {time9}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* среда */}
        <td name="wednesday">
          <div className={classes.oneTrain}>
            {workout.zGravity}
            <br />
            {linkOlga}
            {time9}
            {iconTel}
          </div>
          <div className={classes.oneTrain}>
            {workout.hatha55}
            <br />
            <a href="#">Наталья</a>
            {time9}
          </div>
          <div className={classes.oneTrain}>
            {workout.hatha}
            <br />
            {linkVeronika}
            {time9}
          </div>
        </td>
        {/* четверг */}
        <td name="thursday">
          <div className={classes.oneTrain}>
            {workout.zGravity}
            <br />
            {linkOlga}
            {time9}
            {iconTel}
          </div>
          <div className={classes.oneTrain}>
            {workout.hatha}
            <br />
            для начинающих
            <br />
            <a href="#">Наталья</a>
            {time9}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* пятница */}
        <td name="friday">
          <div className={classes.oneTrain}>
            {workout.zGravity}
            <br />
            {linkOlga}
            {time9}
            {iconTel}
          </div>
          <div className={classes.oneTrain}>
            {workout.hatha55}
            <br />
            <a href="#">Наталья</a>
            {time9}
          </div>
          <div className={classes.oneTrain}>
            {workout.hatha}
            <br />
            {linkVeronika}
            {time9}
          </div>
        </td>
        {/* суббота */}
        <td name="saturday">
          <div className={classes.oneTrain}>
            {workout.hatha}
            <br />
            {linkVeronika}
            {time9}
          </div>
          <div className={classes.oneTrain}>
            {workout.slim}
            <br />
            + гамаки
            <br />
            {linkPushka}
            {time9}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* воскресенье */}
        <td name="sunday" rowSpan="9" className="sunday">
          <div className={classes.weekend}>
            <h2>Сегодня воскресенье!</h2>
            <ReactSVG src={sunbed} />
            <p>
              Шамбала сегодня не работает,
              <br /> приходи завтра!
            </p>
            <p>Хороших выходных!</p>
          </div>
        </td>
      </tr>
      {/* 10:30 */}
      <tr className={classes.even}>
        <td>{time103}</td>
        {/* понедельник */}
        <td name="monday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* вторник */}
        <td name="tuesday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* среда */}
        <td name="wednesday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* четверг */}
        <td name="thursday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* пятница */}
        <td name="friday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* суббота */}
        <td name="saturday">
          <div className={classes.oneTrain}>
            {workout.hatha}
            <br />
            {linkOlga}
            {time103}
          </div>
          <div className={classes.oneTrain}>
            {workout.kids}
            <br />
            в гамаках *
            <br />
            <a href="#">Наталья</a>
            {time103}
            {iconTel}
          </div>
        </td>
      </tr>
      {/* 11:00 */}
      <tr>
        <td>{time11}</td>
        {/* понедельник */}
        <td name="monday">
          <div className={classes.oneTrain}>
            {workout.bodyMix}
            <br />
            Пилатес+стрейчинг
            <br />
            <abbr title="Миофасциальный релиз">+ МФР</abbr>
            {linkPushka}
            {time11}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* вторник */}
        <td name="tuesday">
          <div className={classes.oneTrain}>
            {workout.helth}
            <br />
            в гамаках 55+ *
            <br />
            {linkOlga}
            {time11}
            {iconTel}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* среда */}
        <td name="wednesday">
          <div className={classes.oneTrain}>
            {workout.bodyMix}
            <br />
            Пилатес+стрейчинг
            <br />
            <abbr title="Миофасциальный релиз">+ МФР</abbr>
            {linkPushka}
            {time11}
          </div>
          <div className={classes.oneTrain}>
            {workout.eastDance}
            <br />
            <a href="#">Дарья</a>
            {time11}
          </div>
        </td>
        {/* четверг */}
        <td name="thursday">
          <div className={classes.oneTrain}>
            {workout.helth}
            <br />
            в гамаках 55+ *
            <br />
            {linkOlga}
            {time11}
            {iconTel}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* пятница */}
        <td name="friday">
          <div className={classes.oneTrain}>
            {workout.eastDance}
            <br />
            <a href="#">Дарья</a>
            {time11}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* суббота */}
        <td name="saturday">
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
        <td name="monday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* вторник */}
        <td name="tuesday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* среда */}
        <td name="wednesday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* четверг */}
        <td name="thursday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* пятница */}
        <td name="friday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* суббота */}
        <td name="saturday">
          <div className={classes.oneTrain}>
            {workout.plastic}
            <br />
            <a href="#">Лилия</a>
            {time12}
          </div>
        </td>
      </tr>
      {/* 13:00 */}
      <tr>
        <td>{time13}</td>
        {/* понедельник */}
        <td name="monday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* вторник */}
        <td name="tuesday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* среда */}
        <td name="wednesday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* четверг */}
        <td name="thursday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* пятница */}
        <td name="friday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* суббота */}
        <td name="saturday">
          <div className={classes.oneTrain}>
            {workout.acro}
            <br />
            {linkOlga}
            {time13}
            {iconTel}
          </div>
        </td>
      </tr>
      {/* 18:00 */}
      <tr className={classes.even}>
        <td>{time18}</td>
        {/* понедельник */}
        <td name="monday">
          <div className={classes.oneTrain}>
            {workout.terapy}
            <br />
            опорно-двигательного
            <br />
            аппарата
            <br />
            <a href="#">Наталья</a>
            {time18}
          </div>
          <div className={classes.oneTrain}>
            {workout.zGravity}
            <br />
            {linkOlga}
            {time18}
            {iconTel}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* вторник */}
        <td name="tuesday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* среда */}
        <td name="wednesday">
          <div className={classes.oneTrain}>
            {workout.terapy}
            <br />
            опорно-двигательного
            <br />
            аппарата
            <br />
            <a href="#">Наталья</a>
            {time18}
          </div>
          <div className={classes.oneTrain}>
            {workout.zGravity}
            <br />
            {linkOlga}
            {time18}
            {iconTel}
          </div>
          <div className={classes.oneTrain}>
            {workout.fitnes}
            <br />
            по-Восточному
            <br />
            <a href="#">Дарья</a>
            {time18}
          </div>
        </td>
        {/* четверг */}
        <td name="thursday">
          <div className={classes.oneTrain}>
            {workout.plastic}
            <br />
            <a href="#">Лилия</a>
            {time18}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* пятница */}
        <td name="friday">
          <div className={classes.oneTrain}>
            {workout.terapy}
            <br />
            опорно-двигательного
            <br />
            аппарата
            <br />
            <a href="#">Наталья</a>
            {time18}
          </div>

          <div className={classes.oneTrain}>
            {workout.zGravity}
            <br />
            {linkOlga}
            {time18}
            {iconTel}
          </div>
          <div className={classes.oneTrain}>
            {workout.fitnes}
            <br />
            по-Восточному
            <br />
            <a href="#">Дарья</a>
            {time18}
          </div>
        </td>
        {/* суббота */}
        <td name="saturday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
      </tr>
      {/* 18:30 */}
      <tr>
        <td>{time183}</td>
        {/* понедельник */}
        <td name="monday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* вторник */}
        <td name="tuesday">
          <div className={classes.oneTrain}>
            {workout.hatha}
            <br />
            {linkVeronika}
            {time183}
          </div>
        </td>
        {/* среда */}
        <td name="wednesday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* четверг */}
        <td name="thursday">
          <div className={classes.oneTrain}>
            {workout.hatha}
            <br />
            {linkVeronika}
            {time183}
          </div>
        </td>
        {/* пятница */}
        <td name="friday">
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
        {/* суббота */}
        <td>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
      </tr>

      {/* 19:15 */}
      <tr className={classes.even}>
        <td>{time1915}</td>
        {/* понедельник */}
        <td name="monday">
          <div className={classes.oneTrain}>
            Айкидо
            <br />
            +6 и взрослые
            <br />
            <a href="#">Имя тренера?</a>
            {time1915}
          </div>
        </td>
        {/* вторник */}
        <td name="tuesday">
          <div className={classes.oneTrain}>
            {workout.slim}
            <br />
            {linkPushka}
            {time1915}
          </div>
        </td>
        {/* среда */}
        <td name="wednesday">
          <div className={classes.oneTrain}>
            Айкидо
            <br />
            +6 и взрослые
            <br />
            <a href="#">Имя тренера?</a>
            {time1915}
          </div>
        </td>
        {/* четверг */}
        <td name="thursday">
          <div className={classes.oneTrain}>
            {workout.slim}
            <br />
            {linkPushka}
            {time1915}
          </div>
        </td>
        {/* пятница */}
        <td name="friday">
          <div className={classes.oneTrain}>
            Айкидо
            <br />
            +6 и взрослые
            <br />
            <a href="#">Имя тренера?</a>
            {time1915}
          </div>
        </td>
        {/* суббота */}
        <td>
          <div className={classes.oneTrainEmpty}>
            {/* //------empty-------------------- */}
          </div>
        </td>
      </tr>

      {/* 19:30 */}
      <tr>
        <td>{time193}</td>
        {/* понедельник */}
        <td name="monday">
          <div className={classes.oneTrain}>
            {workout.hatha}
            <br />
            {linkOlga}
            {time193}
          </div>
        </td>
        {/* вторник */}
        <td name="tuesday">
          <div className={classes.oneTrain}>
            {workout.zGravity}
            <br />
            {linkOlga}
            {time193}
            {iconTel}
          </div>
        </td>
        {/* среда */}
        <td name="wednesday">
          <div className={classes.oneTrain}>
            {workout.acro}
            <br />
            {linkOlga}
            {time193}
            {iconTel}
          </div>
        </td>
        {/* четверг */}
        <td name="thursday">
          <div className={classes.oneTrain}>
            {workout.zGravity}
            <br />
            {linkOlga}
            {time193}
            {iconTel}
          </div>
        </td>
        {/* пятница */}
        <td name="friday">
          <div className={classes.oneTrain}>
            {workout.hatha}
            <br />
            {linkOlga}
            {time193}
          </div>
        </td>
        {/* суббота */}
        <td>
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
          <div className={classes.svgFooter}> {iconTel}</div>
        </td>
      </tr>
    </tfoot>
  </table>
)

export default TimeTableMonth
