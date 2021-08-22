import classes from './Cost.module.scss'
import container from '../../index.module.scss'

import Abonements from '../../components/Abonements/Abonements'
import ClubCards from '../../components/ClubCards/ClubCards'

const Cost = () => {
  return (
    <section className={classes.Cost}>
      <div className={container.container}>
        <div className={classes.content}>
          <Abonements />

          <ClubCards />
        </div>
      </div>
    </section>
  )
}

export default Cost
