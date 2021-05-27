import React from 'react'
import classes from './MainMenu.module.scss'
import MenuItem from './MenuItem/MenuItem'
import SocialItems from '../../SocialItems/SocialItems'

class MainMenu extends React.Component {
  state = {
    menu: [
      {
        value: 'Главная',
        link: '/',
        exact: true,
      },
      {
        value: 'О нас',
        link: '/about',
        exact: false,
      },
      {
        value: 'Преподаватели',
        link: '/teachers',
        exact: false,
      },
      {
        value: 'Контакты',
        link: '/contacts',
        exact: false,
      },
      {
        value: 'Рассписание',
        link: '/time-table',
        exact: false,
      },
      {
        value: 'Блог',
        link: '/blog',
        exact: false,
      },
    ],
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
      <nav className={classes.MainMenu}>
        <ul>
          {this.state.menu.map((menuItem, index) => {
            return (
              <MenuItem
                key={index}
                value={menuItem.value}
                to={menuItem.link}
                exact={menuItem.exact}
              />
            )
          })}
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
        </ul>
      </nav>
    )
  }
}

export default MainMenu
