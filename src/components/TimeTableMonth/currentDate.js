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

const currentDay = () => {
  let date = new Date()

  // if (document.querySelector('#choiseTable').value === 'monday') {
  //   date.setDate(0)
  // }
  // if (document.querySelector('#choiseTable').value === 'tuesday') {
  //   date.setDate(1)
  // }
  // if (document.querySelector('#choiseTable').value === 'wednesday') {
  //   date.setDate(2)
  // }
  // if (document.querySelector('#choiseTable').value === 'thursday') {
  //   date.setDate(3)
  // }
  // if (document.querySelector('#choiseTable').value === 'friday') {
  //   date.setDate(4)
  // }
  // if (document.querySelector('#choiseTable').value === 'saturday') {
  //   date.setDate(5)
  // }

  // if (document.querySelector('#choiseTable').value === 'month') {
  //   document.getElementsByName('monday').forEach((item) => {
  //     item.classList.remove('monday')
  //   })
  //   document.getElementsByName('tuesday').forEach((item) => {
  //     item.classList.remove('tuesday')
  //   })
  //   document.getElementsByName('wednesday').forEach((item) => {
  //     item.classList.remove('wednesday')
  //   })
  //   document.getElementsByName('thursday').forEach((item) => {
  //     item.classList.remove('thursday')
  //   })
  //   document.getElementsByName('friday').forEach((item) => {
  //     item.classList.remove('friday')
  //   })
  //   document.getElementsByName('saturday').forEach((item) => {
  //     item.classList.remove('saturday')
  //   })
  //   document.getElementsByName('sunday').forEach((item) => {
  //     item.classList.add('sunday')
  //   })
  // }

  switch (date.getDay() + 2) {
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

///////////////////////////////////
const showCurrentDay = () => {
  //сбрасываю классы
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

  // //Понедельник
  // if (currentDay() === 'Понедельник') {
  //   document.getElementsByName('tuesday').forEach((item) => {
  //     item.classList.toggle('tuesday')
  //   })
  //   document.getElementsByName('wednesday').forEach((item) => {
  //     item.classList.toggle('wednesday')
  //   })
  //   document.getElementsByName('thursday').forEach((item) => {
  //     item.classList.toggle('thursday')
  //   })
  //   document.getElementsByName('friday').forEach((item) => {
  //     item.classList.toggle('friday')
  //   })
  //   document.getElementsByName('saturday').forEach((item) => {
  //     item.classList.toggle('saturday')
  //   })
  // }

  // //Вторник
  // if (currentDay() === 'Вторник') {
  //   document.getElementsByName('monday').forEach((item) => {
  //     item.classList.toggle('monday')
  //   })
  //   document.getElementsByName('wednesday').forEach((item) => {
  //     item.classList.toggle('wednesday')
  //   })
  //   document.getElementsByName('thursday').forEach((item) => {
  //     item.classList.toggle('thursday')
  //   })
  //   document.getElementsByName('friday').forEach((item) => {
  //     item.classList.toggle('friday')
  //   })
  //   document.getElementsByName('saturday').forEach((item) => {
  //     item.classList.toggle('saturday')
  //   })
  // }
  // //Среда
  // if (currentDay() === 'Среда') {
  //   document.getElementsByName('monday').forEach((item) => {
  //     item.classList.toggle('monday')
  //   })
  //   document.getElementsByName('tuesday').forEach((item) => {
  //     item.classList.toggle('tuesday')
  //   })
  //   document.getElementsByName('thursday').forEach((item) => {
  //     item.classList.toggle('thursday')
  //   })
  //   document.getElementsByName('friday').forEach((item) => {
  //     item.classList.toggle('friday')
  //   })
  //   document.getElementsByName('saturday').forEach((item) => {
  //     item.classList.toggle('saturday')
  //   })
  // }
  // //Четверг
  // if (currentDay() === 'Четверг') {
  //   document.getElementsByName('monday').forEach((item) => {
  //     item.classList.toggle('monday')
  //   })
  //   document.getElementsByName('tuesday').forEach((item) => {
  //     item.classList.toggle('tuesday')
  //   })
  //   document.getElementsByName('wednesday').forEach((item) => {
  //     item.classList.toggle('wednesday')
  //   })
  //   document.getElementsByName('friday').forEach((item) => {
  //     item.classList.toggle('friday')
  //   })
  //   document.getElementsByName('saturday').forEach((item) => {
  //     item.classList.toggle('saturday')
  //   })
  // }
  // //пятница
  // if (currentDay() === 'Пятница') {
  //   document.getElementsByName('monday').forEach((item) => {
  //     item.classList.toggle('monday')
  //   })
  //   document.getElementsByName('tuesday').forEach((item) => {
  //     item.classList.toggle('tuesday')
  //   })
  //   document.getElementsByName('wednesday').forEach((item) => {
  //     item.classList.toggle('wednesday')
  //   })
  //   document.getElementsByName('thursday').forEach((item) => {
  //     item.classList.toggle('thursday')
  //   })
  //   document.getElementsByName('saturday').forEach((item) => {
  //     item.classList.toggle('saturday')
  //   })
  // }
  // //суббота
  // if (currentDay() === 'Суббота') {
  //   document.getElementsByName('monday').forEach((item) => {
  //     item.classList.toggle('monday')
  //   })
  //   document.getElementsByName('tuesday').forEach((item) => {
  //     item.classList.toggle('tuesday')
  //   })
  //   document.getElementsByName('wednesday').forEach((item) => {
  //     item.classList.toggle('wednesday')
  //   })
  //   document.getElementsByName('thursday').forEach((item) => {
  //     item.classList.toggle('thursday')
  //   })
  //   document.getElementsByName('friday').forEach((item) => {
  //     item.classList.toggle('friday')
  //   })
  // }
  // //воскресенье
  // if (currentDay() === 'Воскресенье') {
  //   document.getElementsByName('monday').forEach((item) => {
  //     item.classList.toggle('monday')
  //   })
  //   document.getElementsByName('tuesday').forEach((item) => {
  //     item.classList.toggle('tuesday')
  //   })
  //   document.getElementsByName('wednesday').forEach((item) => {
  //     item.classList.toggle('wednesday')
  //   })
  //   document.getElementsByName('thursday').forEach((item) => {
  //     item.classList.toggle('thursday')
  //   })
  //   document.getElementsByName('friday').forEach((item) => {
  //     item.classList.toggle('friday')
  //   })
  //   document.getElementsByName('saturday').forEach((item) => {
  //     item.classList.toggle('saturday')
  //   })
  //   document.getElementsByName('sunday').forEach((item) => {
  //     item.classList.toggle('sunday')
  //   })
  // }
}

export { currentMonth, showMonthToday }
