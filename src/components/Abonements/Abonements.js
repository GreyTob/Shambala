import { connect } from 'react-redux'

import classes from './Abonements.module.scss'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const Abonements = ({ type, abonements }) => (
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
        <td rowSpan="6">{abonements.oneLesson.days}</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>
      <tr className={classes.tr}>
        <td>{type.old}</td>
        <td>{abonements.oneLesson.old}</td>
      </tr>
      <tr className={classes.tr}>
        <td>{type.yang}</td>
        <td>{abonements.oneLesson.yang}</td>
      </tr>
      <tr className={classes.tr}>
        <td>{type.morning}</td>
        <td>{abonements.oneLesson.morning}</td>
      </tr>
      <tr className={classes.tr}>
        <td>{type.usually}</td>
        <td>{abonements.oneLesson.usually}</td>
      </tr>
      <tr className={classes.tr}>
        <td>{type.individual}</td>
        <td>{abonements.oneLesson.individual}</td>
      </tr>
      {/* 4 занятия */}
      <tr className={classes.even}>
        <td rowSpan="4">{abonements.fourLessons.days}</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>

      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.fourLessons.morning / abonements.fourLessons.days
            )}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.morning}</td>

          <td>{abonements.fourLessons.morning}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.fourLessons.usually / abonements.fourLessons.days
            )}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.usually}</td>
          <td>{abonements.fourLessons.usually}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.fourLessons.individual / abonements.fourLessons.days
            )}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.individual}</td>
          <td>{abonements.fourLessons.individual}</td>
        </tr>
      </Tippy>
      {/* 8 занятий */}
      <tr>
        <td rowSpan="4">{abonements.eightLessons.days}</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.eightLessons.morning / abonements.eightLessons.days
            )}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{type.morning}</td>
          <td>{abonements.eightLessons.morning}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.eightLessons.usually / abonements.eightLessons.days
            )}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{type.usually}</td>
          <td>{abonements.eightLessons.usually}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.eightLessons.individual / abonements.eightLessons.days
            )}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{type.individual}</td>
          <td>{abonements.eightLessons.individual}</td>
        </tr>
      </Tippy>
      {/* 10 занятий */}
      <tr className={classes.even}>
        <td rowSpan="6">{abonements.tenLessons.days}</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(abonements.tenLessons.old / abonements.tenLessons.days)}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.old}</td>
          <td>{abonements.tenLessons.old}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.tenLessons.yang / abonements.tenLessons.days
            )}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.yang}</td>
          <td>{abonements.tenLessons.yang}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.tenLessons.morning / abonements.tenLessons.days
            )}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.morning}</td>
          <td>{abonements.tenLessons.morning}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.tenLessons.usually / abonements.tenLessons.days
            )}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.usually}</td>
          <td>{abonements.tenLessons.usually}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.tenLessons.individual / abonements.tenLessons.days
            )}
          </span>
        }
      >
        <tr className={(classes.even, classes.tr)}>
          <td>{type.individual}</td>
          <td>{abonements.tenLessons.individual}</td>
        </tr>
      </Tippy>
      {/* 12 занятий */}
      <tr>
        <td rowSpan="4">{abonements.twelveLessons.days}</td>
        <td className={classes.none}></td>
        <td className={classes.none}></td>
      </tr>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.twelveLessons.morning / abonements.twelveLessons.days
            )}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{type.morning}</td>
          <td>{abonements.twelveLessons.morning}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.twelveLessons.usually / abonements.twelveLessons.days
            )}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{type.usually}</td>
          <td>{abonements.twelveLessons.usually}</td>
        </tr>
      </Tippy>
      <Tippy
        content={
          <span>
            Стоимость занятия{' '}
            {Math.floor(
              abonements.twelveLessons.individual /
                abonements.twelveLessons.days
            )}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{type.individual}</td>
          <td>{abonements.twelveLessons.individual}</td>
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
    abonements: state.costReducer.abonements,
  }
}

export default connect(mapStateTotype)(Abonements)
