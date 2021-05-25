import { ReactSVG } from 'react-svg'
import classes from './MenuItemsSocial.module.scss'

import vk from '../../../../assets/social_icons/negative/vk/vk2.svg'
import instagram from '../../../../assets/social_icons/negative/Instagram/Negative.svg'
import youTube from '../../../../assets/social_icons/negative/YouTube/Negative.svg'

const MenuItemsSocial = (props) => {
  console.log(props)
  return (
    <li className={classes.MenuItemsSocial}>
      <a href={props.href} target={props.target} rel={props.rel}>
        <ReactSVG
          src={
            props.value === 'vk'
              ? vk
              : props.value === 'inst'
              ? instagram
              : youTube
          }
        />
      </a>
    </li>
  )
}
export default MenuItemsSocial
