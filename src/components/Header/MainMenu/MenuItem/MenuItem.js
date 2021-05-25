import { NavLink } from 'react-router-dom'
import classes from './MenuItem.module.scss'

const MenuItem = (props) => {
  return (
    <li className={classes.MenuItem}>
      <NavLink
        to={props.to}
        exact={props.exact ? props.exact : null}
        activeClassName={classes.activeLink}
        className={classes.underline}
      >
        {props.value}
      </NavLink>
    </li>
  )
}
export default MenuItem
