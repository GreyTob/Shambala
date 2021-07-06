import React from 'react'
import classes from './MainMenu.module.scss'

import MenuItem from '../MenuItem/MenuItem'
import SocialItems from '../../SocialItems/SocialItems'

const MainMenu = ({ menu, social }) => (
  <nav className={classes.MainMenu}>
    <ul>
      {menu.map((menuItem) => (
        <MenuItem
          key={menuItem.value}
          value={menuItem.value}
          to={menuItem.to}
          id={menuItem.id}
          // spy={true}
          smooth={true}
          // offset={-100}
          // duration={100}
        />
      ))}

      <ul>
        {social.map((socialItem) => (
          <SocialItems
            key={socialItem.value}
            value={socialItem.value}
            href={socialItem.href}
            target={socialItem.target}
            rel={socialItem.rel}
          />
        ))}
      </ul>
    </ul>
  </nav>
)

export default MainMenu
