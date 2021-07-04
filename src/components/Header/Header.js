import React, { Component, useState } from 'react'
import { menu, social } from './headerState'

import Logo from './Logo/Logo'
import Burger from './Burger/Burger'
import MainMenu from './MainMenu/MainMenu'
import BurgerMenu from './BurgerMenu/BurgerMenu'

import classes from './Header.module.scss'
import contain from '../../index.module.scss'

class Header extends Component {
  state = {
    menu,
    social,
    burgerActive: false,
  }

  handlerBurgerActiveToggle = () => {
    this.setState({
      burgerActive: !this.state.burgerActive,
    })

    //отключаю прокрутку экрана при раскрытом меню (само меню будет скролится)
    if (!this.state.burgerActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }

  // let {menu, burgerActive} = this.state

  render() {
    return (
      <header
        id="header"
        className={
          this.state.burgerActive ? classes.HeaderActive : classes.Header
        }
      >
        <div className={contain.container}>
          <div className={classes.contant}>
            <Logo />
            <Burger
              burgerActive={this.state.burgerActive}
              handlerBurgerActiveToggle={this.handlerBurgerActiveToggle}
            />
            <MainMenu menu={this.state.menu} social={this.state.social} />
            <BurgerMenu
              menu={this.state.menu}
              burgerActive={this.state.burgerActive}
              handlerBurgerActiveToggle={this.handlerBurgerActiveToggle}
            />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
