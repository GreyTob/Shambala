import { BURGER_ACTIVE_TOGGLE } from '../actions/actionTypes'

const initialState = {
  menu: [
    {
      value: 'Главная',
      to: '/',
      // exact: true,
      id: 'mainLink',
    },
    {
      value: 'О нас',
      to: {
        pathname: '/',
        hash: 'about',
      },
      // exact: true,
    },
    {
      value: 'Преподаватели',
      to: {
        pathname: '/',
        hash: 'teachers',
      },
      // exact: false,
    },
    {
      value: 'Контакты',
      to: {
        pathname: '/',
        hash: 'contacts',
      },
      // exact: false,
    },
    {
      value: 'Расписание',
      to: '/time-table',
      exact: false,
      id: 'time-tableLink',
    },
    {
      value: 'Цены',
      to: '/cost',
      // exact: false,
      id: 'costLink',
    },
  ],
  social: [
    {
      value: 'vk',
      href: 'https://vk.com/yogashambala74',
      target: '_blank',
      rel: 'noreferrer',
    },
    {
      value: 'inst',
      href: 'https://www.instagram.com/shambhala_yoga/',
      target: '_blank',
      rel: 'noreferrer',
    },
    {
      value: 'youTube',
      href: 'https://www.youtube.com/channel/UCH8EG88m8-wFtm4E4Gnqs1Q',
      target: '_blank',
      rel: 'noreferrer',
    },
  ],
  burgerActive: false,
}

export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case BURGER_ACTIVE_TOGGLE:
      return {
        ...state,
        burgerActive: !state.burgerActive,
      }
    default:
      return state
  }
}
