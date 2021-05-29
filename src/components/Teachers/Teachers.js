import React, { Component } from 'react'
import classes from './Teachers.module.scss'
import TeacherItem from './TeacherItem/TeacherItem'
import container from '../../index.module.scss'
import Button from '../Button/Button'

import Pepa from '../../assets/teachers/1Pepa.jpg'
import Pugovka from '../../assets/teachers/2Button.jpg'
import Kesha from '../../assets/teachers/3kesha.jpg'
import Lisa from '../../assets/teachers/4Lisa.jpg'
import Pa from '../../assets/teachers/5Pa.jpg'
import Spange from '../../assets/teachers/6Spange.jpg'
import Volk from '../../assets/teachers/7volk.jpg'

class Teachers extends Component {
  state = {
    teachers: [
      {
        name: 'Свинка Пэпа',
        direction: 'Акро-йога',
        discription:
          'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах.',
        src: Pepa,
        alt: 'Pepa',
      },
      {
        name: 'Кнопка',
        direction: 'Хатха-йога',
        discription: 'Посажу на шпагатю Не встанешь',
        src: Pugovka,
        alt: 'Кнопка',
      },
      {
        name: 'Кеша',
        direction: 'Гамаки',
        discription:
          'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах.',
        src: Kesha,
        alt: 'Кеша',
      },
      {
        name: 'Лиза',
        direction: 'Зумба',
        discription:
          'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах.',
        src: Lisa,
        alt: 'Лиза',
      },
      {
        name: 'Дедуля',
        direction: '50 плюс',
        discription: 'Йога после 50? Можно и нужно!',
        src: Pa,
        alt: 'Дедуля',
      },
      {
        name: 'Спанч Боб',
        direction: 'Растяжка',
        discription:
          'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах.',
        src: Spange,
        alt: 'Spange',
      },
      {
        name: 'Волк',
        direction: 'Табата',
        discription:
          'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах.',
        src: Volk,
        alt: 'Волк',
      },
    ],
    teachersToggle: false,
    buttonValueOpen: 'Показать больше',
    buttonValueClose: 'Свернуть',
  }

  showeTeachersToggle = () => {
    this.setState({
      teachersToggle: !this.state.teachersToggle,
    })
  }

  // карточки всегда перемешиваются
  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5)
  }

  render() {
    {
      this.shuffle(this.state.teachers)
    }
    return (
      <section className={classes.Teachers}>
        <div className={container.container}>
          <div className={classes.content}>
            <h2>Наши преподаватели</h2>
            <div className={classes.block}>
              {!this.state.teachersToggle ? (
                <React.Fragment>
                  <TeacherItem
                    id={this.state.teachers[0].id}
                    name={this.state.teachers[0].name}
                    direction={this.state.teachers[0].direction}
                    discription={this.state.teachers[0].discription}
                    src={this.state.teachers[0].src}
                    alt={this.state.teachers[0].alt}
                  />
                  <TeacherItem
                    name={this.state.teachers[1].name}
                    direction={this.state.teachers[1].direction}
                    discription={this.state.teachers[1].discription}
                    src={this.state.teachers[1].src}
                    alt={this.state.teachers[1].alt}
                  />
                  <TeacherItem
                    name={this.state.teachers[2].name}
                    direction={this.state.teachers[2].direction}
                    discription={this.state.teachers[2].discription}
                    src={this.state.teachers[2].src}
                    alt={this.state.teachers[2].alt}
                  />
                </React.Fragment>
              ) : (
                this.state.teachers.map((teacher, index) => {
                  return (
                    <TeacherItem
                      key={index}
                      name={teacher.name}
                      direction={teacher.direction}
                      discription={teacher.discription}
                      src={teacher.src}
                      alt={teacher.alt}
                    />
                  )
                })
              )}
            </div>
            <Button
              onClick={this.showeTeachersToggle}
              teachersToggle={this.state.teachersToggle}
              buttonValueOpen={this.state.buttonValueOpen}
              buttonValueClose={this.state.buttonValueClose}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Teachers
