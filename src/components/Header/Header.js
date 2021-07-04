import React, { useState } from 'react'

import Logo from './Logo/Logo'
import Burger from './Burger/Burger'
import MainMenu from './MainMenu/MainMenu'
import BurgerMenu from './BurgerMenu/BurgerMenu'

import { menu, social } from './headerState'

import classes from './Header.module.scss'
import contain from '../../index.module.scss'

export default function Header() {
  const [burgerActive, setBurgerActive] = useState(false)

  //тут еще надо доделать
  //отключает прокрутку экрана при раскрытом меню (само меню будет скролится)
  if (burgerActive) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }

  return (
    <header className={burgerActive ? classes.HeaderActive : classes.Header}>
      <div className={contain.container}>
        <div className={classes.contant}>
          <Logo />

          <MainMenu menu={menu} social={social} />

          <Burger
            burgerActive={burgerActive}
            handlerBurgerActiveToggle={() => setBurgerActive(!burgerActive)}
          />

          <BurgerMenu
            menu={menu}
            burgerActive={burgerActive}
            handlerBurgerActiveToggle={() => setBurgerActive(!burgerActive)}
          />
        </div>
      </div>
    </header>
  )
}
