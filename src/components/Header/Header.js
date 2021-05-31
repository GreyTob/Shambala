import React, { Component } from 'react'
import classes from './Header.module.scss'
import contain from '../../index.module.scss'

import Logo from './Logo/Logo'
import Burger from './Burger/Burger'
import MainMenu from './MainMenu/MainMenu'
import BurgerMenu from './BurgerMenu/BurgerMenu'

class Header extends Component {
  state = {
    menu: [
      {
        value: 'Главная',
        to: '/',
        // exact: true,
        id: 'mainLink',
      },
      {
        value: 'О нас',
        to: {
          pathname: '/',
          hash: 'about',
        },
        // exact: true,
      },
      {
        value: 'Преподаватели',
        to: {
          pathname: '/',
          hash: 'teachers',
        },
        // exact: false,
      },
      {
        value: 'Контакты',
        to: {
          pathname: '/',
          hash: 'contacts',
        },
        // exact: false,
      },
      {
        value: 'Рассписание',
        to: '/time-table',
        exact: false,
        id: 'time-tableLink',
      },
      {
        value: 'Цены',
        to: '/cost',
        // exact: false,
        id: 'costLink',
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
    burgerActive: false,
  }

  burgerActiveToggle = () => {
    console.log('click')
    this.setState({
      burgerActive: !this.state.burgerActive,
    })
  }

  render() {
    return (
      <header className={classes.Header}>
        <div className={contain.container}>
          <div className={classes.contant}>
            <Logo />
            <Burger
              burgerActive={this.state.burgerActive}
              burgerActiveToggle={this.burgerActiveToggle}
            />
            <MainMenu menu={this.state.menu} social={this.state.social} />
            <BurgerMenu
              menu={this.state.menu}
              burgerActive={this.state.burgerActive}
              burgerActiveToggle={this.burgerActiveToggle}
            />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
