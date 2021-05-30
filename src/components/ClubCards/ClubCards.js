import classes from './ClubCards.module.scss'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const ClubCards = (props) => (
  <table className={classes.ClubCards}>
    <caption>Клубные карты</caption>
    <thead>
      <tr className={classes.noHover}>
        <th>Срок действия</th>
        <th>Вариант оплаты</th>
        <th>Первый взнос/последующие</th>
        <th>Стоимость, руб</th>
      </tr>
    </thead>
    {/* тело */}
    <tbody>
      <tr>
        <td>1 месяц</td>
        <td>100%</td>
        <td>3500/-</td>
        <td>3500</td>
      </tr>
      <Tippy content={<span>Стоимость месяца 2500</span>}>
        <tr>
          <td>3 месяца</td>
          <td>50% + рассрочка 2 месяца</td>
          <td>3750/1875</td>
          <td>7500</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость месяца 2000</span>}>
        <tr>
          <td>6 месяцев</td>
          <td>50% + рассрочка 4 месяца</td>
          <td>6000/1500</td>
          <td>12000</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость месяца 1670</span>}>
        <tr>
          <td>12 месяцев</td>
          <td>50% + рассрочка 6 месяца</td>
          <td>10000/1667</td>
          <td>20000</td>
        </tr>
      </Tippy>
      <Tippy content={<span>Стоимость месяца 2500</span>}>
        <tr>
          <td>
            12 месяцев
            <br />
            Семейный на 2х человек
          </td>
          <td>50% + рассрочка 6 месяца</td>
          <td>15000/2500</td>
          <td>30000</td>
        </tr>
      </Tippy>
    </tbody>
    {/* подвал */}
    <tfoot className={classes.tfoot}>
      <tr className={classes.noHover}>
        <td colSpan="3">
          Клубная карта позволяет посещать&nbsp;
          <span className={classes.underline}>не более одного</span>&nbsp;
          посещения в день
        </td>
      </tr>
    </tfoot>
  </table>
)

export default ClubCards
