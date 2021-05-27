import { ReactSVG } from 'react-svg'
import classes from './SocialItems.module.scss'

import vk from '../../assets/social_icons/negative/vk/vk2.svg'
import instagram from '../../assets/social_icons/negative/Instagram/Negative.svg'
import youTube from '../../assets/social_icons/negative/YouTube/Negative.svg'

const SocialItems = (props) => {
  return (
    <li className={classes.SocialItems}>
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
export default SocialItems
