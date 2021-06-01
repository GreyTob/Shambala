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

export default currentMonth
