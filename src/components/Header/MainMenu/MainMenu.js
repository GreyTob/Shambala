import React from 'react'
import classes from './MainMenu.module.scss'
import { NavLink } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

import vk from '../../../assets/social_icons/negative/vk/vk2.svg'
import instagram from '../../../assets/social_icons/negative/Instagram/Negative.svg'
import youTube from '../../../assets/social_icons/negative/YouTube/Negative.svg'

const MainMenu = (props) => {
  return (
    <nav className={classes.MainMenu}>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            activeClassName={classes.activeLink}
            className={classes.underline}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName={classes.activeLink}
            className={classes.underline}
          >
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teachers"
            activeClassName={classes.activeLink}
            className={classes.underline}
          >
            Преподаватели
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            activeClassName={classes.activeLink}
            className={classes.underline}
          >
            Контакты
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/time-table"
            activeClassName={classes.activeLink}
            className={classes.underline}
          >
            Рассписание
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: '/blog',
              search: '?what',
              hash: 'hash',
            }}
            activeClassName={classes.activeLink}
            className={classes.underline}
          >
            Блог
          </NavLink>
        </li>
        <li>
          <ul>
            <li>
              <a
                href="https://vk.com/yogashambala74"
                target="_blank"
                rel="noreferrer"
              >
                <ReactSVG src={vk} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shambhala_yoga/"
                target="_blank"
                rel="noreferrer"
              >
                <ReactSVG src={instagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCH8EG88m8-wFtm4E4Gnqs1Q"
                target="_blank"
                rel="noreferrer"
              >
                <ReactSVG src={youTube} />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu
