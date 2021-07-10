import classes from './Button.module.scss'

const Button = ({ onClick, value }) => {
  return (
    <button className={classes.buttonns} onClick={onClick}>
      {value}
    </button>
  )
}

export default Button
