const currentMonth = () => {
  let date = new Date()

  switch (date.getMonth() + 1) {
    case 1:
      return 'январь'
    case 2:
      return 'февраль'
    case 3:
      return 'март'
    case 4:
      return 'апрель'
    case 5:
      return 'май'
    case 6:
      return 'июнь'
    case 7:
      return 'июль'
    case 8:
      return 'август'
    case 9:
      return 'сентябрь'
    case 10:
      return 'октябрь'
    case 11:
      return 'ноябрь'
    case 12:
      return 'декабрь'
    default:
      console.log('currentMonth default')
  }
}

const currentDay = () => {
  let date = new Date()

  console.log(date.getDay())

  switch (date.getDay()) {
    case 1:
      return 'Понедельник'
    case 2:
      return 'Вторник'
    case 3:
      return 'Среда'
    case 4:
      return 'Четверг'
    case 5:
      return 'Пятница'
    case 6:
      return 'Суббота'
    case 7:
      return 'Воскресенье'

    default:
      console.log('currentDay default')
  }
}

export { currentMonth, currentDay }
