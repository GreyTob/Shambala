import classes from './TeacherItem.module.scss'

const TeacherItem = (props) => {
  console.log(props)
  return (
    <div className={classes.TeacherItem}>
      <div className={classes.img}>
        <img src={props.src} alt={props.alt} />
      </div>
      <p className={classes.name}>{props.name}</p>
      <p>{props.direction}</p>
      <p>{props.discription}</p>
    </div>
  )
}

export default TeacherItem
