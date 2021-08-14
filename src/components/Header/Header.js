import React, { useState } from 'react'

import Logo from './Logo/Logo'
import Burger from './Burger/Burger'
import MainMenu from './MainMenu/MainMenu'
import BurgerMenu from './BurgerMenu/BurgerMenu'

import { menu, social } from './headerState'

import classes from './Header.module.scss'
import contain from '../../index.module.scss'

import { connect } from 'react-redux'

function Header(props) {
  //тут еще надо доделать
  //отключает прокрутку экрана при раскрытом меню (само меню будет скролится)
  if (props.burgerActive) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }

  return (
    <header
      className={props.burgerActive ? classes.HeaderActive : classes.Header}
    >
      <div className={contain.container}>
        <div className={classes.contant}>
          <Logo />

          <MainMenu menu={menu} social={social} />

          <Burger />

          <BurgerMenu
            menu={menu}
            burgerActive={props.burgerActive}
            // handlerBurgerActiveToggle={() => setBurgerActive(!burgerActive)}
          />
        </div>
      </div>
    </header>
  )
}

function mapStateToProps(state) {
  return {
    burgerActive: state.burgerActive.burgerActive,
  }
}

export default connect(mapStateToProps)(Header)
