// import { NavLink } from 'react-router-dom'
import classes from './MenuItem.module.scss'
import ScrollUpHandler from '../../../ScrollUp/ScrollUpHandler'

import { HashLink } from 'react-router-hash-link'
import { Link, animateScroll as scroll } from 'react-scroll'

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
        // activeClass="activeLink"
        spy={false}
        smooth={true}
        offset={-70}
        duration={100}
      >
        {props.value}
      </HashLink>
    </li>
  )
}
export default MenuItem
