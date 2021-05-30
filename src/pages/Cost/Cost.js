import React, { Component } from 'react'
import classes from './Cost.module.scss'
import container from '../../index.module.scss'

import Abonements from '../../components/Abonements/Abonements'
import ClubCards from '../../components/ClubCards/ClubCards'

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
            <Abonements
              yang={this.state.yang}
              old={this.state.old}
              morning={this.state.morning}
              usually={this.state.usually}
              individual={this.state.individual}
            />
            <ClubCards />
          </div>
        </div>
      </section>
    )
  }
}

export default Cost
