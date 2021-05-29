import classes from './Button.module.scss'

const Button = (props) => {
  return (
    <button className={classes.buttonns} onClick={props.onClick}>
      {props.teachersToggle ? props.buttonValueClose : props.buttonValueOpen}
    </button>

    // <div className={classes.wrap}>
    //   <button className={classes.button}>
    //     {props.teachersToggle ? props.buttonValueClose : props.buttonValueOpen}
    //   </button>
    // </div>
  )
}

export default Button
