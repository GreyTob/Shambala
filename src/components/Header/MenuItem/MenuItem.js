// import { NavLink } from 'react-router-dom'
import classes from './MenuItem.module.scss'
import ScrollUpHandler from '../../ScrollUp/ScrollUpHandler'

import { HashLink } from 'react-router-hash-link'
// import { Element, animateScroll as scroll } from 'react-scroll'

const MenuItem = (props) => {
  return (
    <li className={classes.MenuItem}>
      <HashLink
        to={props.to}
        // activeClassName={classes.activeLink}
        className={classes.underline}
        id={props.id}
        onClick={
          props.id === 'mainLink' ||
          props.id === 'time-tableLink' ||
          props.id === 'costLink'
            ? ScrollUpHandler
            : null
        }
        onTouchStart={props.burgerActiveToggle}
        // activeClass={props.activeClass}
        // spy={props.spy}
        // smooth={props.smooth}
        // offset={props.offset}
        // duration={props.duration}
      >
        {props.value}
      </HashLink>
    </li>
  )
}
export default MenuItem