export const menu = [
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
    id: 'about',
    // exact: true,
  },
  {
    value: 'Преподаватели',
    to: {
      pathname: '/',
      hash: 'teachers',
    },
    id: 'teachers',
    // exact: false,
  },
  {
    value: 'Контакты',
    to: {
      pathname: '/',
      hash: 'contacts',
    },
    id: 'contacts',
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
]

export const social = [
  {
    value: 'vk',
    href: 'https://vk.com/yogashambala74',
    target: '_blank',
    rel: 'noreferrer',
    id: 'social_vk',
  },
  {
    value: 'inst',
    href: 'https://www.instagram.com/shambhala_yoga/',
    target: '_blank',
    rel: 'noreferrer',
    id: 'social_inst',
  },
  {
    value: 'youTube',
    href: 'https://www.youtube.com/channel/UCH8EG88m8-wFtm4E4Gnqs1Q',
    target: '_blank',
    rel: 'noreferrer',
    id: 'social_youTube',
  },
]
