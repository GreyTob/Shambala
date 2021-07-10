import classes from './ScrollUp.module.scss'
import { ReactSVG } from 'react-svg'
import ScrollUpHandler from './ScrollUpHandler'

import chevronUp from './assets/chevron-up-solid.svg'

const ScrollUp = () => (
  <div
    className={classes.ScrollUp}
    onClick={ScrollUpHandler}
    onTouchStart={ScrollUpHandler}
  >
    <ReactSVG src={chevronUp} />

    <span>Наверх</span>
  </div>
)

export default ScrollUp
