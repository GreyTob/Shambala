import React from 'react'
import classes from './MainMenu.module.scss'
import { ReactSVG } from 'react-svg'

import vk from '../../../assets/social_icons/negative/vk/vk2.svg'
import instagram from '../../../assets/social_icons/negative/Instagram/Negative.svg'
import youTube from '../../../assets/social_icons/negative/YouTube/Negative.svg'

const MainMenu = (props) => {
  return (
    <div className={classes.MainMenu}>
      <ul>
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
        <li>
          <ul>
            <li>
              <a href="https://vk.com/yogashambala74" target="_blank">
                <ReactSVG src={vk} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shambhala_yoga/"
                target="_blank"
              >
                <ReactSVG src={instagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCH8EG88m8-wFtm4E4Gnqs1Q"
                target="_blank"
              >
                <ReactSVG src={youTube} />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default MainMenu
