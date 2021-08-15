import { connect } from 'react-redux'

import classes from './BurgerMenu.module.scss'
import MenuItem from '../MenuItem/MenuItem'

const BurgerMenu = ({ burgerActive, menu }) => (
  <nav className={burgerActive ? classes.BurgerMenuActive : classes.BurgerMenu}>
    <ul>
      {menu.map((menuItem) => {
        return (
          <MenuItem
            key={menuItem.value}
            value={menuItem.value}
            to={menuItem.to}
            rout={menuItem.rout}
            id={menuItem.id}
            // spy={false}
            smooth={true}
            // offset={-100}
            // duration={100}
          />
        )
      })}
    </ul>
  </nav>
)

function mapStateToProps(state) {
  return {
    burgerActive: state.headerReducer.burgerActive,
    menu: state.headerReducer.menu,
  }
}

export default connect(mapStateToProps)(BurgerMenu)
