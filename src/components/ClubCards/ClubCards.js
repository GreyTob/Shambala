import { connect } from 'react-redux'

import classes from './ClubCards.module.scss'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const ClubCards = ({ clubCards }) => (
  <table className={classes.ClubCards}>
    <caption>Клубные карты</caption>
    <thead>
      <tr>
        <th>Срок действия</th>
        <th>Вариант оплаты</th>
        <th>Первый взнос/последующие</th>
        <th>Стоимость, руб</th>
      </tr>
    </thead>
    {/* тело */}
    <tbody>
      {/* 1 месяц*/}
      <tr className={classes.tr}>
        <td>{clubCards.oneMonth.month} месяц</td>
        <td>{clubCards.oneMonth.pay}</td>
        <td>{clubCards.oneMonth.credit}</td>
        <td>{clubCards.oneMonth.cost}</td>
      </tr>

      {/* 3 месяца */}
      <Tippy
        content={
          <span>
            Стоимость месяца{' '}
            {Math.floor(clubCards.threeMonth.cost / clubCards.threeMonth.month)}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{clubCards.threeMonth.month} месяца</td>
          <td>{clubCards.threeMonth.pay}</td>
          <td>{clubCards.threeMonth.credit}</td>
          <td>{clubCards.threeMonth.cost}</td>
        </tr>
      </Tippy>

      {/* 6 месяцев */}
      <Tippy
        content={
          <span>
            Стоимость месяца{' '}
            {Math.floor(clubCards.sixMonth.cost / clubCards.sixMonth.month)}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{clubCards.sixMonth.month} месяцев</td>
          <td>{clubCards.sixMonth.pay}</td>
          <td>{clubCards.sixMonth.credit}</td>
          <td>{clubCards.sixMonth.cost}</td>
        </tr>
      </Tippy>

      {/* 12 месяцев */}
      <Tippy
        content={
          <span>
            Стоимость месяца{' '}
            {Math.floor(
              clubCards.twelveMonth.cost / clubCards.twelveMonth.month
            )}
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>{clubCards.twelveMonth.month} месяцев</td>
          <td>{clubCards.twelveMonth.pay}</td>
          <td>{clubCards.twelveMonth.credit}</td>
          <td>{clubCards.twelveMonth.cost}</td>
        </tr>
      </Tippy>

      {/* семейный 12 месяцев  */}
      <Tippy
        content={
          <span>
            Стоимость месяца{' '}
            {Math.floor(
              clubCards.familyTwelveMonth.cost /
                clubCards.familyTwelveMonth.month /
                2
            )}{' '}
            на человека
          </span>
        }
      >
        <tr className={classes.tr}>
          <td>
            {clubCards.familyTwelveMonth.month} месяцев
            <br />
            Семейный на 2х человек
          </td>
          <td>{clubCards.familyTwelveMonth.pay}</td>
          <td>{clubCards.familyTwelveMonth.credit}</td>
          <td>{clubCards.familyTwelveMonth.cost}</td>
        </tr>
      </Tippy>
    </tbody>
    {/* подвал */}
    <tfoot className={classes.tfoot}>
      <tr>
        <td colSpan="4">
          Клубная карта позволяет посещать&nbsp;
          <span className={classes.underline}>не более одного</span>&nbsp;
          посещения в день
        </td>
      </tr>
    </tfoot>
  </table>
)

function mapStateToProps(state) {
  console.log(state)
  return {
    clubCards: state.costReducer.clubCards,
  }
}

export default connect(mapStateToProps)(ClubCards)
