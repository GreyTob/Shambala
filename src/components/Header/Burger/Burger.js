import classes from './Burger.module.scss'

const Burger = ({ burgerActive, handlerBurgerActiveToggle }) => (
  <div
    className={burgerActive ? classes.BurgerActive : classes.Burger}
    onClick={handlerBurgerActiveToggle}
  >
    <span />
  </div>
)

export default Burger
