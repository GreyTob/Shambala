import React, { Component } from 'react'
import classes from './Teachers.module.scss'
import TeacherItem from './TeacherItem/TeacherItem'
import container from '../../index.module.scss'
import Button from '../Button/Button'

import { Parallax } from 'react-scroll-parallax'

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
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore, odio voluptatem quos nihil dolorem voluptas tenetur ea non molestias!',
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
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque exercitationem soluta ipsum. Modi, corrupti! Repellendus, autem exercitationem maiores eos deserunt pariatur doloremque hic neque ad dolorem ipsum cumque ea? ',
        src: Kesha,
        alt: 'Кеша',
      },
      {
        name: 'Лиза',
        direction: 'Зумба',
        discription:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius eaque nostrum velit aliquam repudiandae saepe nihil? Aliquid vero et iusto perspiciatis!',
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
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, consequuntur dolorum. Hic ipsum iste vel reiciendis. Ullam, magni.',
        src: Spange,
        alt: 'Spange',
      },
      {
        name: 'Волк',
        direction: 'Табата',
        discription:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam perferendis at itaque delectus cupiditate.',
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

  parallaxOneItem = () => {
    let xOne = [-15, 15]
    if (window.innerWidth < 767) {
      xOne = [0, 0]
    }
    return xOne
  }

  parallaxTwoItem = () => {
    let xTwo = [15, -15]
    if (window.innerWidth < 767) {
      xTwo = [0, 0]
    }
    return xTwo
  }

  fourTeacherItems = () => {
    if (window.innerWidth < 576) {
      return null
    } else if (window.innerWidth < 767) {
      return (
        <TeacherItem
          id={this.state.teachers[3].id}
          name={this.state.teachers[3].name}
          direction={this.state.teachers[3].direction}
          discription={this.state.teachers[3].discription}
          src={this.state.teachers[3].src}
          alt={this.state.teachers[3].alt}
        />
      )
    }
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
      <section id="teachers" className={classes.Teachers}>
        <div className={container.container}>
          <div className={classes.content}>
            <h2>Наши преподаватели</h2>

            <div className={classes.block}>
              {!this.state.teachersToggle ? (
                <React.Fragment>
                  <Parallax x={this.parallaxOneItem()}>
                    <TeacherItem
                      id={this.state.teachers[0].id}
                      name={this.state.teachers[0].name}
                      direction={this.state.teachers[0].direction}
                      discription={this.state.teachers[0].discription}
                      src={this.state.teachers[0].src}
                      alt={this.state.teachers[0].alt}
                    />
                  </Parallax>
                  <TeacherItem
                    name={this.state.teachers[1].name}
                    direction={this.state.teachers[1].direction}
                    discription={this.state.teachers[1].discription}
                    src={this.state.teachers[1].src}
                    alt={this.state.teachers[1].alt}
                  />
                  <Parallax x={this.parallaxTwoItem()}>
                    <TeacherItem
                      name={this.state.teachers[2].name}
                      direction={this.state.teachers[2].direction}
                      discription={this.state.teachers[2].discription}
                      src={this.state.teachers[2].src}
                      alt={this.state.teachers[2].alt}
                    />
                  </Parallax>
                  {this.fourTeacherItems()}
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
