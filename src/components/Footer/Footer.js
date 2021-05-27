import React, { Component } from 'react'
import classes from './Footer.module.scss'
import container from '../../index.module.scss'
import SocialItems from '../SocialItems/SocialItems'

class Footer extends Component {
  state = {
    social: [
      {
        value: 'vk',
        href: 'https://vk.com/yogashambala74',
        target: '_blank',
        rel: 'noreferrer',
      },
      {
        value: 'inst',
        href: 'https://www.instagram.com/shambhala_yoga/',
        target: '_blank',
        rel: 'noreferrer',
      },
      {
        value: 'youTube',
        href: 'https://www.youtube.com/channel/UCH8EG88m8-wFtm4E4Gnqs1Q',
        target: '_blank',
        rel: 'noreferrer',
      },
    ],
  }
  render() {
    return (
      <div className={classes.Footer}>
        <div className={container.container}>
          <div className={classes.content}>
            <h2>Мы в соцсетях</h2>

            <ul>
              {this.state.social.map((socialItem, index) => {
                return (
                  <SocialItems
                    key={index}
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
      </div>
    )
  }
}

export default Footer
