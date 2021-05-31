import classes from './BurgerMenu.module.scss'
import MenuItem from '../MenuItem/MenuItem'

const BurgerMenu = (props) => {
  return (
    <nav
      className={
        props.burgerActive ? classes.BurgerMenuActive : classes.BurgerMenu
      }
    >
      {/* <div className={classes.blur} /> */}
      <ul>
        {props.menu.map((menuItem, index) => {
          return (
            <MenuItem
              key={index}
              value={menuItem.value}
              to={menuItem.to}
              rout={menuItem.rout}
              id={menuItem.id}
              burgerActiveToggle={props.burgerActiveToggle}
              //
              // activeClass={'classes.activeLink'}
              spy={false}
              smooth={true}
              offset={-100}
              duration={100}
            />
          )
        })}
      </ul>
    </nav>
  )
}

export default BurgerMenu
