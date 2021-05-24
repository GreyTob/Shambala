import React, { Component } from 'react'
import classes from './Header.module.scss'

import MainMenu from './MainMenu/MainMenu'
import Logo from './Logo/Logo'

class Header extends Component {
  render() {
    return (
      <header className={classes.Header}>
        <Logo />
        <MainMenu />
      </header>
    )
  }
}

export default Header
