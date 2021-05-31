import React, { Component } from 'react'
import classes from './Header.module.scss'
import contain from '../../index.module.scss'

import MainMenu from './MainMenu/MainMenu'
import Logo from './Logo/Logo'

class Header extends Component {
  render() {
    return (
      <header className={classes.Header}>
        <div className={contain.container}>
          <div className={classes.contant}>
            <Logo />
            <MainMenu />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
