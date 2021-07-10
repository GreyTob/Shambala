import classes from './TeacherItem.module.scss'
import { Link } from 'react-router-dom'

const TeacherItem = (props) => {
  return (
    <Link to={`/teachers/${props.name}`}>
      <div className={classes.TeacherItem}>
        <div className={classes.img}>
          <img src={props.src} alt={props.alt} />
        </div>
        <p className={classes.name}>{props.name}</p>
        <p>{props.direction}</p>
        <p>{props.discription}</p>
      </div>
    </Link>
  )
}

export default TeacherItem
