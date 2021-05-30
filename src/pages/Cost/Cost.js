import React, { Component } from 'react'
import classes from './Cost.module.scss'
import container from '../../index.module.scss'

// import price from '../../assets/price.jpg'

class Cost extends Component {
  state = {
    yang: 'Детский**',
    old: 'Пенсионный*',
    morning: 'Утренний',
    usually: 'Обычный',
    individual: 'Индивидуальное занятие',
  }
  render() {
    return (
      <section className={classes.Cost}>
        <div className={container.container}>
          <div className={classes.content}>
            <table>
              <caption>Абонементы</caption>
              <thead>
                <tr className={classes.noHover}>
                  <th>Количество посещений</th>
                  <th>Тип абонемента</th>
                  <th>Стоимость, руб</th>
                </tr>
              </thead>
              {/* тело */}
              <tbody>
                <tr>
                  <td rowspan="6">1</td>
                  <td className={classes.none}></td>
                  <td className={classes.none}></td>
                </tr>
                <tr>
                  <td>{this.state.old}</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>{this.state.yang}</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td>{this.state.morning}</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>{this.state.usually}</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>{this.state.individual}</td>
                  <td>1200</td>
                </tr>
                {/* 4 посещения */}
                <tr className={classes.even}>
                  <td rowspan="6">4</td>
                  <td className={classes.none}></td>
                  <td className={classes.none}></td>
                </tr>
                <tr className={classes.even}>
                  <td>{this.state.old}</td>
                  <td>-</td>
                </tr>
                <tr className={classes.even}>
                  <td>{this.state.yang}</td>
                  <td>-</td>
                </tr>
                <tr className={classes.even}>
                  <td>{this.state.morning}</td>
                  <td>1100</td>
                </tr>
                <tr className={classes.even}>
                  <td>{this.state.usually}</td>
                  <td>1200</td>
                </tr>
                <tr className={classes.even}>
                  <td>{this.state.individual}</td>
                  <td>4600</td>
                </tr>
                {/* 8 занятий */}
                <tr>
                  <td rowspan="6">8</td>
                  <td className={classes.none}></td>
                  <td className={classes.none}></td>
                </tr>
                <tr>
                  <td>{this.state.old}</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>{this.state.yang}</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>{this.state.morning}</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>{this.state.usually}</td>
                  <td>2200</td>
                </tr>
                <tr>
                  <td>{this.state.individual}</td>
                  <td>8400</td>
                </tr>
                {/* 10 занятий */}
                <tr className={classes.even}>
                  <td rowspan="6">10</td>
                  <td className={classes.none}></td>
                  <td className={classes.none}></td>
                </tr>
                <tr className={classes.even}>
                  <td>{this.state.old}</td>
                  <td>900</td>
                </tr>
                <tr className={classes.even}>
                  <td>{this.state.yang}</td>
                  <td>2000</td>
                </tr>
                <tr className={classes.even}>
                  <td>{this.state.morning}</td>
                  <td>2300</td>
                </tr>
                <tr className={classes.even}>
                  <td>{this.state.usually}</td>
                  <td>2500</td>
                </tr>
                <tr className={classes.even}>
                  <td>{this.state.individual}</td>
                  <td>10000</td>
                </tr>
                {/* 12 занятий */}
                <tr>
                  <td rowspan="6">12</td>
                  <td className={classes.none}></td>
                  <td className={classes.none}></td>
                </tr>
                <tr>
                  <td>{this.state.old}</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>{this.state.yang}</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>{this.state.morning}</td>
                  <td>2500</td>
                </tr>
                <tr>
                  <td>{this.state.usually}</td>
                  <td>2700</td>
                </tr>
                <tr>
                  <td>{this.state.individual}</td>
                  <td>11400</td>
                </tr>
              </tbody>
              {/* подвал */}
              <tfoot className={classes.tfoot}>
                <tr className={classes.noHover}>
                  <td colspan="3">
                    Пенсионерам и студентам скидка 10%
                    <br />
                    * группа здоровья, утренняя хатха-йога, суставная
                    гимнастика, Восточные танцы
                    <br />
                    ** До 17 лет (бессрочный)
                    <br />
                    <span className={classes.underline}>
                      Срок действия абонемента 2 месяца
                    </span>
                    . Можно заморозить еще на месяц. Итого 3 месяца.
                    <br />
                    По просроченному абонементу можно посещать занятия, доплатив
                    за каждое неиспользуемое посещение по 90 руб
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    )
  }
}

export default Cost
