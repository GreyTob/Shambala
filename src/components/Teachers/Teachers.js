import React, { useState, useEffect } from 'react'
import classes from './Teachers.module.scss'
import TeacherItem from './TeacherItem/TeacherItem'
import container from '../../index.module.scss'
import Button from '../UI/Button/Button'
import { teachers } from './teachersState'
// import { parallaxOneItem, parallaxTwoItem } from './parallax'

// import { Parallax } from 'react-scroll-parallax'

const Teachers = () => {
  const [teachersIsShow, setTeachersIsShow] = useState(false)
  const [buttonValue, setButtonValue] = useState('Показать больше')

  useEffect(() => {
    teachersIsShow
      ? setButtonValue('Свернуть')
      : setButtonValue('Показать больше')

    shuffle(teachers)
  }, [teachersIsShow])

  // перемешивать карточки
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
  }

  return (
    <section id="teachers" className={classes.Teachers}>
      <div className={container.container}>
        <div className={classes.content}>
          <h2>Наши преподаватели</h2>

          <div className={classes.block}>
            {!teachersIsShow
              ? teachers
                  .filter((_, ind) => ind < 3)
                  .map((teacher) => {
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
              : teachers.map((teacher) => {
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
                })}
          </div>

          <Button
            onClick={() => setTeachersIsShow(!teachersIsShow)}
            value={buttonValue}
          />
        </div>
      </div>
    </section>
  )
}

export default Teachers
