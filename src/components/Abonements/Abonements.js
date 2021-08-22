import { connect } from 'react-redux'

import classes from './Abonements.module.scss'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const Abonements = ({ type, costs }) => (
  <table className={classes.Abonements}>
    <caption>Абонементы</caption>
    <thead>
      <tr>
        <th>Количество посещений</th>
        <th>Тип абонемента</th>
        <th>Стоимость, руб</th>
      </tr>
    </thead>

    <tbody>
      {/* 1 занятие */}
      <tr>
        <td rowSpan="6">{costs.oneLesson.days}</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>
      <tr className={classes.tr}>
        <td>{type.old}</td>
        <td>{costs.oneLesson.old}</td>
      </tr>
      <tr className={classes.tr}>
        <td>{type.yang}</td>
        <td>{costs.oneLesson.yang}</td>
      </tr>
      <tr className={classes.tr}>
        <td>{type.morning}</td>
        <td>{costs.oneLesson.morning}</td>
      </tr>
      <tr className={classes.tr}>
        <td>{type.usually}</td>
        <td>{costs.oneLesson.usually}</td>
      </tr>
      <tr className={classes.tr}>
        <td>{type.individual}</td>
        <td>{costs.oneLesson.individual}</td>
      </tr>
      {/* 4 занятия */}
      <tr className={classes.even}>
        <td rowSpan="4">{costs.fourLessons.days}</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>

      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(costs.fourLessons.morning / costs.fourLessons.days)}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.morning}</td>

          <td>{costs.fourLessons.morning}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(costs.fourLessons.usually / costs.fourLessons.days)}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.usually}</td>
          <td>{costs.fourLessons.usually}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(costs.fourLessons.individual / costs.fourLessons.days)}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.individual}</td>
          <td>{costs.fourLessons.individual}</td>
        </tr>
      </Tippy>
      {/* 8 занятий */}
      <tr>
        <td rowSpan="4">{costs.eightLessons.days}</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(costs.eightLessons.morning / costs.eightLessons.days)}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{type.morning}</td>
          <td>{costs.eightLessons.morning}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(costs.eightLessons.usually / costs.eightLessons.days)}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{type.usually}</td>
          <td>{costs.eightLessons.usually}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              costs.eightLessons.individual / costs.eightLessons.days
            )}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{type.individual}</td>
          <td>{costs.eightLessons.individual}</td>
        </tr>
      </Tippy>
      {/* 10 занятий */}
      <tr className={classes.even}>
        <td rowSpan="6">{costs.tenLessons.days}</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(costs.tenLessons.old / costs.tenLessons.days)}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.old}</td>
          <td>{costs.tenLessons.old}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(costs.tenLessons.yang / costs.tenLessons.days)}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.yang}</td>
          <td>{costs.tenLessons.yang}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(costs.tenLessons.morning / costs.tenLessons.days)}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.morning}</td>
          <td>{costs.tenLessons.morning}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(costs.tenLessons.usually / costs.tenLessons.days)}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.usually}</td>
          <td>{costs.tenLessons.usually}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(costs.tenLessons.individual / costs.tenLessons.days)}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.individual}</td>
          <td>{costs.tenLessons.individual}</td>
        </tr>
      </Tippy>
      {/* 12 занятий */}
      <tr>
        <td rowSpan="4">{costs.twelveLessons.days}</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(costs.twelveLessons.morning / costs.twelveLessons.days)}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{type.morning}</td>
          <td>{costs.twelveLessons.morning}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(costs.twelveLessons.usually / costs.twelveLessons.days)}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{type.usually}</td>
          <td>{costs.twelveLessons.usually}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              costs.twelveLessons.individual / costs.twelveLessons.days
            )}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{type.individual}</td>
          <td>{costs.twelveLessons.individual}</td>
        </tr>
      </Tippy>
    </tbody>
    {/* подвал */}
    <tfoot className={classes.tfoot}>
      <tr>
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

function mapStateTotype(state) {
  return {
    type: state.costReducer.type,
    costs: state.costReducer.costs,
  }
}

export default connect(mapStateTotype)(Abonements)
