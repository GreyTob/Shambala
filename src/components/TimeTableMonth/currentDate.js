const currentMonth = () => {
  let date = new Date()

  switch (date.getMonth()) {
    case 0:
      return 'январь'
    case 1:
      return 'февраль'
    case 2:
      return 'март'
    case 3:
      return 'апрель'
    case 4:
      return 'май'
    case 5:
      return 'июнь'
    case 6:
      return 'июль'
    case 7:
      return 'август'
    case 8:
      return 'сентябрь'
    case 9:
      return 'октябрь'
    case 10:
      return 'ноябрь'
    case 11:
      return 'декабрь'

    default:
      console.log('currentMonth default')
  }
}

//для desktop
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
    case 0:
      return 'Воскресенье'

    default:
      console.log('currentDay default')
  }
}
//для select desktop
const showMonthToday = (props) => {
  if (props) {
    //показывает текущий день
    // //Понедельник
    if (currentDay() === 'Понедельник') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.remove('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    }

    //Вторник
    if (currentDay() === 'Вторник') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.remove('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    }
    //Среда
    if (currentDay() === 'Среда') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.remove('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    }
    //Четверг
    if (currentDay() === 'Четверг') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.remove('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    }
    //пятница
    if (currentDay() === 'Пятница') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.remove('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    }
    //суббота
    if (currentDay() === 'Суббота') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.remove('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    }
    //воскресенье
    if (currentDay() === 'Воскресенье') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.remove('sunday')
      })
    }
  } else {
    //показывает таблицу на всю неделю
    document.getElementsByName('monday').forEach((item) => {
      item.classList.remove('monday')
    })
    document.getElementsByName('tuesday').forEach((item) => {
      item.classList.remove('tuesday')
    })
    document.getElementsByName('wednesday').forEach((item) => {
      item.classList.remove('wednesday')
    })
    document.getElementsByName('thursday').forEach((item) => {
      item.classList.remove('thursday')
    })
    document.getElementsByName('friday').forEach((item) => {
      item.classList.remove('friday')
    })
    document.getElementsByName('saturday').forEach((item) => {
      item.classList.remove('saturday')
    })
    document.getElementsByName('sunday').forEach((item) => {
      item.classList.add('sunday')
    })
  }
}

//для телефона

const dayHandler = () => {
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
    case 0:
      return 'Воскресенье'

    default:
      console.log('currentDay default')
  }
}

//для select на экране телефона
const showCurrentDay = (props) => {
  //"расспиание на сегодня"
  if (props === 'currentDay') {
    //Понедельник
    if (dayHandler() === 'Понедельник') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.remove('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    }

    //Вторник
    if (dayHandler() === 'Вторник') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.remove('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    }
    //Среда
    if (dayHandler() === 'Среда') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.remove('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    }
    //Четверг
    if (dayHandler() === 'Четверг') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.remove('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    }
    //пятница
    if (dayHandler() === 'Пятница') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.remove('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    }
    //суббота
    if (dayHandler() === 'Суббота') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.remove('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    }
    //воскресенье
    if (dayHandler() === 'Воскресенье') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.remove('sunday')
      })
    }
  } else {
    //отдельные дни(пон, вт, ср, чт, пт, сб)
    if (props === '1') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.remove('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    } else if (props === '2') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.remove('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    } else if (props === '3') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.remove('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    } else if (props === '4') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.remove('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    } else if (props === '5') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.remove('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    } else if (props === '6') {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.remove('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.add('sunday')
      })
    } else {
      document.getElementsByName('monday').forEach((item) => {
        item.classList.add('monday')
      })
      document.getElementsByName('tuesday').forEach((item) => {
        item.classList.add('tuesday')
      })
      document.getElementsByName('wednesday').forEach((item) => {
        item.classList.add('wednesday')
      })
      document.getElementsByName('thursday').forEach((item) => {
        item.classList.add('thursday')
      })
      document.getElementsByName('friday').forEach((item) => {
        item.classList.add('friday')
      })
      document.getElementsByName('saturday').forEach((item) => {
        item.classList.add('saturday')
      })
      document.getElementsByName('sunday').forEach((item) => {
        item.classList.remove('sunday')
      })
    }
  }
}

export { currentMonth, showMonthToday, showCurrentDay, dayHandler }
