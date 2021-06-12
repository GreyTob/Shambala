import classes from './Button.module.scss'

const Button = (props) => {
  return (
    <button
      className={classes.buttonns}
      onClick={props.onClick}
      type={props.type}
    >
      {props.teachersToggle
        ? props.buttonValueClose
        : props.buttonValueOpen || props.value}
    </button>
  )
}

export default Button
