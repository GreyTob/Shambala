const currentMonth = () => {
  let date = new Date()

  switch (date.getMonth()) {
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

const currentDayCaption = () => {
  let date = new Date()

  switch (date.getDay()) {
    case 1:
      return 'Понедельник'
    case 2:
      return 'Вторник'
    case 3:
      return 'Среду'
    case 4:
      return 'Четверг'
    case 5:
      return 'Пятницу'
    case 6:
      return 'Субботу'
    case 7:
      return 'Воскресенье'

    default:
      console.log('currentDay default')
  }
}

const showCurrentDay = () => {
  console.log(currentDay())
  //Понедельник
  if (currentDay() === 'Понедельник') {
    document.getElementsByName('tuesday').forEach((item) => {
      item.classList.toggle('tuesday')
    })
    document.getElementsByName('wednesday').forEach((item) => {
      item.classList.toggle('wednesday')
    })
    document.getElementsByName('thursday').forEach((item) => {
      item.classList.toggle('thursday')
    })
    document.getElementsByName('friday').forEach((item) => {
      item.classList.toggle('friday')
    })
    document.getElementsByName('saturday').forEach((item) => {
      item.classList.toggle('saturday')
    })
  }

  //Вторник
  if (currentDay() === 'Вторник') {
    document.getElementsByName('monday').forEach((item) => {
      item.classList.toggle('monday')
    })
    document.getElementsByName('wednesday').forEach((item) => {
      item.classList.toggle('wednesday')
    })
    document.getElementsByName('thursday').forEach((item) => {
      item.classList.toggle('thursday')
    })
    document.getElementsByName('friday').forEach((item) => {
      item.classList.toggle('friday')
    })
    document.getElementsByName('saturday').forEach((item) => {
      item.classList.toggle('saturday')
    })
  }
  //Среда
  if (currentDay() === 'Среда') {
    document.getElementsByName('monday').forEach((item) => {
      item.classList.toggle('monday')
    })
    document.getElementsByName('tuesday').forEach((item) => {
      item.classList.toggle('tuesday')
    })
    document.getElementsByName('thursday').forEach((item) => {
      item.classList.toggle('thursday')
    })
    document.getElementsByName('friday').forEach((item) => {
      item.classList.toggle('friday')
    })
    document.getElementsByName('saturday').forEach((item) => {
      item.classList.toggle('saturday')
    })
  }
  //Четверг
  if (currentDay() === 'Четверг') {
    document.getElementsByName('monday').forEach((item) => {
      item.classList.toggle('monday')
    })
    document.getElementsByName('tuesday').forEach((item) => {
      item.classList.toggle('tuesday')
    })
    document.getElementsByName('wednesday').forEach((item) => {
      item.classList.toggle('wednesday')
    })
    document.getElementsByName('friday').forEach((item) => {
      item.classList.toggle('friday')
    })
    document.getElementsByName('saturday').forEach((item) => {
      item.classList.toggle('saturday')
    })
  }
  //пятница
  if (currentDay() === 'Пятница') {
    document.getElementsByName('monday').forEach((item) => {
      item.classList.toggle('monday')
    })
    document.getElementsByName('tuesday').forEach((item) => {
      item.classList.toggle('tuesday')
    })
    document.getElementsByName('wednesday').forEach((item) => {
      item.classList.toggle('wednesday')
    })
    document.getElementsByName('thursday').forEach((item) => {
      item.classList.toggle('thursday')
    })
    document.getElementsByName('saturday').forEach((item) => {
      item.classList.toggle('saturday')
    })
  }
  //суббота
  if (currentDay() === 'Суббота') {
    document.getElementsByName('monday').forEach((item) => {
      item.classList.toggle('monday')
    })
    document.getElementsByName('tuesday').forEach((item) => {
      item.classList.toggle('tuesday')
    })
    document.getElementsByName('wednesday').forEach((item) => {
      item.classList.toggle('wednesday')
    })
    document.getElementsByName('thursday').forEach((item) => {
      item.classList.toggle('thursday')
    })
    document.getElementsByName('friday').forEach((item) => {
      item.classList.toggle('friday')
    })
  }
}

export { currentMonth, currentDay, currentDayCaption, showCurrentDay }
