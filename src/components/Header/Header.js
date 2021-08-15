import Logo from './Logo/Logo'
import MainMenu from './MainMenu/MainMenu'
import Burger from './Burger/Burger'
import BurgerMenu from './BurgerMenu/BurgerMenu'

import { connect } from 'react-redux'

import classes from './Header.module.scss'
import contain from '../../index.module.scss'

function Header({ burgerActive }) {
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

          <MainMenu />

          <Burger />

          <BurgerMenu />
        </div>
      </div>
    </header>
  )
}

function mapStateToProps(state) {
  return {
    burgerActive: state.headerReducer.burgerActive,
  }
}

export default connect(mapStateToProps)(Header)
