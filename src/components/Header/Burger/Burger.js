import classes from './Burger.module.scss'

const Burger = (props) => {
  return (
    <div
      className={props.burgerActive ? classes.BurgerActive : classes.Burger}
      onClick={props.burgerActiveToggle}
    >
      <span />
    </div>
  )
}
export default Burger
