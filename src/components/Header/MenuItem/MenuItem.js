import { connect } from 'react-redux'
import { burgerActiveToggle } from '../../../redux/actions/actions'

import classes from './MenuItem.module.scss'
import ScrollUpHandler from '../../ScrollUp/ScrollUpHandler'

import { NavHashLink } from 'react-router-hash-link'

const MenuItem = ({ id, to, value, burgerActiveToggle }) => {
  const menuClick = () => {
    if (window.innerWidth < 767) {
      burgerActiveToggle()
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

const mapDispatchToProps = {
  burgerActiveToggle,
}

export default connect(null, mapDispatchToProps)(MenuItem)
