import classes from './MenuItem.module.scss'
import ScrollUpHandler from '../../ScrollUp/ScrollUpHandler'

import { NavHashLink } from 'react-router-hash-link'

const MenuItem = ({ to, value, id, handlerBurgerActiveToggle }) => {
  const menuClick = () => {
    if (window.innerWidth < 767) {
      handlerBurgerActiveToggle()
      ScrollUpHandler()
    } else if (
      id === 'mainLink' ||
      id === 'time-tableLink' ||
      id === 'costLink'
    ) {
      ScrollUpHandler()
    }
  }

  return (
    <li className={classes.MenuItem}>
      <NavHashLink
        smooth
        to={to}
        className={classes.underline}
        id={id}
        onClick={menuClick}
      >
        {value}
      </NavHashLink>
    </li>
  )
}
export default MenuItem
