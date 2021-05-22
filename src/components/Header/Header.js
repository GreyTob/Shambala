import React from 'react'
import classes from './Header.module.scss'
import Logo from '../../img/Logo.png'

const Header = (props) => (
  <header className={classes.Header}>
    <figure className={classes.figure}>
      <div className={classes.logo}>
        <a href="#">
          <img className={classes.rotating} src={Logo} alt="logo" />
        </a>
      </div>

      <figcaption className={classes.figcaption}>
        Йога в Магнитогорске. Студия йоги "Шамбала"
      </figcaption>
    </figure>

    <ul className={classes.mainMenu}>
      <li>
        <a href="#">Главная</a>
      </li>
      <li>
        <a href="#">О нас</a>
      </li>
      <li>
        <a href="#">Преподаватели</a>
      </li>
      <li>
        <a href="#">Контакты</a>
      </li>
      <li>
        <a href="#">Классы</a>
      </li>
      <li>
        <a href="#">Блог</a>
      </li>
    </ul>
  </header>
)

export default Header
