import Tippy from '@tippyjs/react'
import classes from './TimeTableMonth.module.scss'
import { Link } from 'react-router-dom'

import { ReactSVG } from 'react-svg'

import list from '../../pages/TimeTable/assets/free-icon-note-book-1170169.svg'
import phone from '../../pages/TimeTable/assets/phone-call.svg'
import gallery from '../../pages/TimeTable/assets/gallery.svg'

export const iconTel = (
  <Tippy
    content={
      <span>
        Предварительная запись{' '}
        <ReactSVG style={{ textAlign: 'center' }} src={phone} />{' '}
      </span>
    }
  >
    <div className={classes.svg}>
      <a href="tel:+73519430470">
        <ReactSVG src={list} />
      </a>
    </div>
  </Tippy>
)

export const linkOlga = (
  <Tippy
    content={
      <span>
        <ReactSVG style={{ margin: '0 auto', width: 20 }} src={gallery} />
        Перейти к фотогалерее
      </span>
    }
  >
    <Link to="/teachers/Ольга">Ольга</Link>
  </Tippy>
)

export const linkPushka = (
  <Tippy
    content={
      <span>
        <ReactSVG style={{ margin: '0 auto', width: 20 }} src={gallery} />
        Перейти к фотогалерее
      </span>
    }
  >
    <Link to="/teachers/Анастасия">Анастасия</Link>
  </Tippy>
)

export const linkVeronika = (
  <Tippy
    content={
      <span>
        <ReactSVG style={{ margin: '0 auto', width: 20 }} src={gallery} />
        Перейти к фотогалерее
      </span>
    }
  >
    <Link to="/teachers/Вероника">Вероника</Link>
  </Tippy>
)

export const time9 = '9:00'
export const time103 = '10:30'
export const time11 = '11:00'
export const time12 = '12:00'
export const time13 = '13:00'
export const time18 = '18:00'
export const time183 = '18:30'
export const time1915 = '19:15'
export const time193 = '19:30'

export const workout = {
  zGravity: 'zGravity (Гамаки)*',
  hatha: 'Хатха-йога',
  hatha55: 'Хатха-йога 55+',
  slim: 'Стройнею с йогой',
  bodyMix: 'BODY MIX',
  helth: 'Группа здоровья',
  eastDance: 'Восточные танцы',
  kids: 'Детская йога',
  acro: 'Акройога*',
  terapy: 'Йогатерапия',
  fitnes: 'Фитнес',
  plastic: 'Plastic dance',
}
