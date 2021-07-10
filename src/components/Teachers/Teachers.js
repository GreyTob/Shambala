import React, { useState, useEffect } from 'react'
import classes from './Teachers.module.scss'
import TeacherItem from './TeacherItem/TeacherItem'
import container from '../../index.module.scss'
import Button from '../UI/Button/Button'
import { teachers } from './teachersState'
import { parallaxOneItem, parallaxTwoItem } from './parallax'

import { Parallax } from 'react-scroll-parallax'

const Teachers = () => {
  const [teachersToggle, setTeachersToggle] = useState(false)
  const [buttonValue, setButtonValue] = useState('Показать больше')

  useEffect(() => {
    teachersToggle
      ? setButtonValue('Свернуть')
      : setButtonValue('Показать больше')

    shuffle(teachers)
  }, [teachersToggle])

  // перемешивать карточки
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
  }

  //показывать разное количество карточек на разных по ширине экранах
  const fourTeacherItems = () => {
    if (window.innerWidth < 576) {
      return null
    } else if (window.innerWidth < 767) {
      return (
        <TeacherItem
          id={teachers[3].id}
          name={teachers[3].name}
          direction={teachers[3].direction}
          discription={teachers[3].discription}
          src={teachers[3].src}
          alt={teachers[3].alt}
        />
      )
    }
  }

  return (
    <section id="teachers" className={classes.Teachers}>
      <div className={container.container}>
        <div className={classes.content}>
          <h2>Наши преподаватели</h2>

          <div className={classes.block}>
            {!teachersToggle ? (
              <React.Fragment>
                <Parallax x={parallaxOneItem()}>
                  <TeacherItem
                    id={teachers[0].id}
                    name={teachers[0].name}
                    direction={teachers[0].direction}
                    discription={teachers[0].discription}
                    src={teachers[0].src}
                    alt={teachers[0].alt}
                  />
                </Parallax>

                <TeacherItem
                  name={teachers[1].name}
                  direction={teachers[1].direction}
                  discription={teachers[1].discription}
                  src={teachers[1].src}
                  alt={teachers[1].alt}
                />

                <Parallax x={parallaxTwoItem()}>
                  <TeacherItem
                    name={teachers[2].name}
                    direction={teachers[2].direction}
                    discription={teachers[2].discription}
                    src={teachers[2].src}
                    alt={teachers[2].alt}
                  />
                </Parallax>

                {fourTeacherItems()}
              </React.Fragment>
            ) : (
              teachers.map((teacher) => {
                return (
                  <TeacherItem
                    key={teacher.name + Math.random()}
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
            onClick={() => setTeachersToggle(!teachersToggle)}
            value={buttonValue}
          />
        </div>
      </div>
    </section>
  )
}

export default Teachers
