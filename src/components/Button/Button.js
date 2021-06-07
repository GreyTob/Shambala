import classes from './Button.module.scss'

const Button = (props) => {
  return (
    <button className={classes.buttonns} onClick={props.onClick}>
      {props.teachersToggle ? props.buttonValueClose : props.buttonValueOpen}
    </button>
  )
}

export default Button
