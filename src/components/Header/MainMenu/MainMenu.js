import React from 'react'
import classes from './MainMenu.module.scss'

import MenuItem from '../MenuItem/MenuItem'
import SocialItems from '../../SocialItems/SocialItems'

const MainMenu = ({ menu, social }) => {
  return (
    <nav className={classes.MainMenu}>
      <ul>
        {menu.map((menuItem, index) => {
          return (
            <MenuItem
              key={index}
              value={menuItem.value}
              to={menuItem.to}
              rout={menuItem.rout}
              id={menuItem.id}
              spy={false}
              smooth={true}
              offset={-100}
              duration={100}
            />
          )
        })}

        <ul>
          {social.map((socialItem, index) => {
            return (
              <SocialItems
                key={index}
                value={socialItem.value}
                href={socialItem.href}
                target={socialItem.target}
                rel={socialItem.rel}
              />
            )
          })}
        </ul>
      </ul>
    </nav>
  )
}

export default MainMenu
