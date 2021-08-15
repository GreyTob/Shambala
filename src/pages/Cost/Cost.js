import React, { Component } from 'react'
import classes from './Cost.module.scss'
import container from '../../index.module.scss'

import Abonements from '../../components/Abonements/Abonements'
import ClubCards from '../../components/ClubCards/ClubCards'

const Cost = () => {
  const state = {
    yang: 'Детский**',
    old: 'Пенсионный*',
    morning: 'Утренний',
    usually: 'Обычный',
    individual: 'Индивидуальное занятие',
  }

  return (
    <section className={classes.Cost}>
      <div className={container.container}>
        <div className={classes.content}>
          <Abonements
            yang={state.yang}
            old={state.old}
            morning={state.morning}
            usually={state.usually}
            individual={state.individual}
          />
          <ClubCards />
        </div>
      </div>
    </section>
  )
}

export default Cost
