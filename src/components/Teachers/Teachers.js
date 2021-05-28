import React, { Component } from 'react'
import classes from './Teachers.module.scss'
import TeacherItem from './TeacherItem/TeacherItem'
import container from '../../index.module.scss'

import Anastasiia from '../../assets/mainBack.jpg'

class Teachers extends Component {
  state = {
    teachers: [
      {
        name: 'Карл',
        direction: 'Акро-йога',
        discription:
          'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах.',
        src: Anastasiia,
        alt: 'Сергей',
      },
      {
        name: 'Анастасия',
        direction: 'Хатха-йога',
        discription: 'Посажу на шпагатю Не встанешь',
        src: Anastasiia,
        alt: 'Анастасия',
      },
      {
        name: 'Джон',
        direction: 'Гамаки',
        discription:
          'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах.',
        src: Anastasiia,
        alt: 'Сергей',
      },
      {
        name: 'Петр',
        direction: 'Зумба',
        discription:
          'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах.',
        src: Anastasiia,
        alt: 'Сергей',
      },
    ],
  }

  render() {
    return (
      <section className={classes.Teachers}>
        <div className={container.container}>
          <div className={classes.content}>
            <h2>Наши преподаватели</h2>
            <div className={classes.block}>
              {this.state.teachers.map((teacher) => {
                return (
                  <TeacherItem
                    name={teacher.name}
                    direction={teacher.direction}
                    discription={teacher.discription}
                    src={teacher.src}
                    alt={teacher.alt}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Teachers
