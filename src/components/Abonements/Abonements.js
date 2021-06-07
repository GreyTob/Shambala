import classes from './Abonements.module.scss'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const Abonements = (props) => (
  <table className={classes.Abonements}>
    <caption>Абонементы</caption>
    <thead>
      <tr className={classes.noHover}>
        <th className={classes.noHover}>Количество посещений</th>
        <th className={classes.noHover}>Тип абонемента</th>
        <th className={classes.noHover}>Стоимость, руб</th>
      </tr>
    </thead>

    <tbody>
      {/* 1 занятие */}
      <tr>
        <td rowSpan="6">1</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>
      <tr>
        <td>{props.old}</td>
        <td>100</td>
      </tr>
      <tr>
        <td>{props.yang}</td>
        <td>250</td>
      </tr>
      <tr>
        <td>{props.morning}</td>
        <td>300</td>
      </tr>
      <tr>
        <td>{props.usually}</td>
        <td>350</td>
      </tr>
      <tr>
        <td>{props.individual}</td>
        <td>1200</td>
      </tr>
      {/* 4 занятия */}
      <tr className={classes.even}>
        <td rowSpan="4">4</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>

      <Tippy content={<span>Стоимость занятия 275</span>}>
        <tr className={classes.even}>
          <td>{props.morning}</td>

          <td>1100</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость занятия 300</span>}>
        <tr className={classes.even}>
          <td>{props.usually}</td>
          <td>1200</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость занятия 1150</span>}>
        <tr className={classes.even}>
          <td>{props.individual}</td>
          <td>4600</td>
        </tr>
      </Tippy>
      {/* 8 занятий */}
      <tr>
        <td rowSpan="4">8</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>
      <Tippy content={<span>Стоимость занятия 250</span>}>
        <tr>
          <td>{props.morning}</td>
          <td>200</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость занятия 275</span>}>
        <tr>
          <td>{props.usually}</td>
          <td>2200</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость занятия 1050</span>}>
        <tr>
          <td>{props.individual}</td>
          <td>8400</td>
        </tr>
      </Tippy>
      {/* 10 занятий */}
      <tr className={classes.even}>
        <td rowSpan="6">10</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>
      <Tippy content={<span>Стоимость занятия 90</span>}>
        <tr className={classes.even}>
          <td>{props.old}</td>
          <td>900</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость занятия 200</span>}>
        <tr className={classes.even}>
          <td>{props.yang}</td>
          <td>2000</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость занятия 230</span>}>
        <tr className={classes.even}>
          <td>{props.morning}</td>
          <td>2300</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость занятия 250</span>}>
        <tr className={classes.even}>
          <td>{props.usually}</td>
          <td>2500</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость занятия 1000</span>}>
        <tr className={classes.even}>
          <td>{props.individual}</td>
          <td>10000</td>
        </tr>
      </Tippy>
      {/* 12 занятий */}
      <tr>
        <td rowSpan="4">12</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>
      <Tippy content={<span>Стоимость занятия 208</span>}>
        <tr>
          <td>{props.morning}</td>
          <td>2500</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость занятия 225</span>}>
        <tr>
          <td>{props.usually}</td>
          <td>2700</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость занятия 950</span>}>
        <tr>
          <td>{props.individual}</td>
          <td>11400</td>
        </tr>
      </Tippy>
    </tbody>
    {/* подвал */}
    <tfoot className={classes.tfoot}>
      <tr className={classes.noHover}>
        <td colSpan="3">
          Пенсионерам и студентам скидка 10%
          <br />
          * группа здоровья, утренняя хатха-йога, суставная гимнастика,
          Восточные танцы
          <br />
          ** До 17 лет (бессрочный)
          <br />
          <br />
          <span className={classes.underline}>
            Срок действия абонемента 2 месяца
          </span>
          . Можно заморозить еще на месяц. Итого 3 месяца.
          <br />
          По просроченному абонементу можно посещать занятия, доплатив за каждое
          неиспользуемое посещение по 90 руб
        </td>
      </tr>
    </tfoot>
  </table>
)

export default Abonements
