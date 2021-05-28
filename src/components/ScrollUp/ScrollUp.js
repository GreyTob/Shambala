import classes from './ScrollUp.module.scss'
import { ReactSVG } from 'react-svg'

import chevronUp from './assets/chevron-up-solid.svg'

const ScrollUp = () => {
  function ScrollUpHandler() {
    let t, s
    s = document.body.scrollTop || window.pageYOffset
    t = setInterval(() => {
      if (s > 0) window.scroll(0, (s -= 15))
      else clearInterval(t)
    }, 5)
  }

  return (
    <div
      className={classes.ScrollUp}
      onClick={ScrollUpHandler}
      onTouchStart={ScrollUpHandler}
    >
      <ReactSVG src={chevronUp} />
      <span>Наверх</span>
    </div>
  )
}

export default ScrollUp
