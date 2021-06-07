// import { NavLink } from 'react-router-dom'
import classes from './MenuItem.module.scss'
import ScrollUpHandler from '../../ScrollUp/ScrollUpHandler'

import { HashLink } from 'react-router-hash-link'

const MenuItem = (props) => {
  const menuClick = () => {
    if (window.innerWidth < 767) {
      props.burgerActiveToggle()
      ScrollUpHandler()
    } else if (
      props.id === 'mainLink' ||
      props.id === 'time-tableLink' ||
      props.id === 'costLink'
    ) {
      ScrollUpHandler()
    }
  }
  return (
    <li className={classes.MenuItem}>
      <HashLink
        to={props.to}
        activeClassName={classes.activeLink}
        className={classes.underline}
        id={props.id}
        onClick={menuClick}
      >
        {props.value}
      </HashLink>
    </li>
  )
}
export default MenuItem
