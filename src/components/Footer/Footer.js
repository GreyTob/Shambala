import { connect } from 'react-redux'

import classes from './Footer.module.scss'
import container from '../../index.module.scss'

import SocialItems from '../SocialItems/SocialItems'

const Footer = ({ social }) => (
  <footer className={classes.Footer}>
    <div className={container.container}>
      <div className={classes.content}>
        <h2>Мы в соцсетях</h2>

        <ul>
          {social.map((socialItem) => {
            return (
              <SocialItems
                aria-label={socialItem.value}
                key={socialItem.value}
                value={socialItem.value}
                href={socialItem.href}
                target={socialItem.target}
                rel={socialItem.rel}
              />
            )
          })}
        </ul>

        <p>Не забудь на нас подписаться</p>

        <p>Йога в Магнитогорске. Студия йоги "Шамбала"</p>
      </div>
    </div>
  </footer>
)

function mapStateToProps(state) {
  return {
    social: state.headerReducer.social,
  }
}

export default connect(mapStateToProps)(Footer)
