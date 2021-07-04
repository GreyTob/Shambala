import classes from './BurgerMenu.module.scss'
import MenuItem from '../MenuItem/MenuItem'

const BurgerMenu = ({ menu, burgerActive, handlerBurgerActiveToggle }) => (
  <nav className={burgerActive ? classes.BurgerMenuActive : classes.BurgerMenu}>
    <ul>
      {menu.map((menuItem, index) => {
        return (
          <MenuItem
            key={index}
            value={menuItem.value}
            to={menuItem.to}
            rout={menuItem.rout}
            id={menuItem.id}
            handlerBurgerActiveToggle={handlerBurgerActiveToggle}
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

export default BurgerMenu
