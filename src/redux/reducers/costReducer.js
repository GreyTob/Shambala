const initialStater = {
  type: {
    old: 'Пенсионный*',
    yang: 'Детский**',
    morning: 'Утренний',
    usually: 'Обычный',
    individual: 'Индивидуальное занятие',
  },
  abonements: {
    oneLesson: {
      days: 1,
      old: 100,
      yang: 250,
      morning: 300,
      usually: 350,
      individual: 1200,
    },
    fourLessons: {
      days: 4,
      old: null,
      yang: null,
      morning: 1100,
      usually: 1200,
      individual: 4600,
    },
    eightLessons: {
      days: 8,
      old: null,
      yang: null,
      morning: 2000,
      usually: 2200,
      individual: 8400,
    },
    tenLessons: {
      days: 10,
      old: 900,
      yang: 2000,
      morning: 2300,
      usually: 2500,
      individual: 10000,
    },
    twelveLessons: {
      days: 12,
      old: null,
      yang: null,
      morning: 2500,
      usually: 2700,
      individual: 11400,
    },
  },
  clubCards: {
    oneMonth: {
      month: 1,
      pay: '100%',
      credit: '3500/-',
      cost: 3500,
    },
    threeMonth: {
      month: 3,
      pay: '50% + рассрочка 2 месяца',
      credit: '3750/1875',
      cost: 7500,
    },
    sixMonth: {
      month: 6,
      pay: '50% + рассрочка 4 месяца',
      credit: '6000/1500',
      cost: 12000,
    },
    twelveMonth: {
      month: 12,
      pay: '50% + рассрочка 6 месяцев',
      credit: '10000/1667',
      cost: 20000,
    },
    familyTwelveMonth: {
      month: 12,
      pay: '50% + рассрочка 6 месяцев',
      credit: '15000/2500',
      cost: 30000,
    },
  },
}

export const costReducer = (state = initialStater, action) => state
