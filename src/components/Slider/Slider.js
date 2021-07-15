import React, { useState, useRef, useEffect } from 'react'
import { sliderPhotos } from './sliderPhotos'
import classes from './Slider.module.scss'
import container from '../../index.module.scss'
import { ReactSVG } from 'react-svg'

import chevron from './assets/chevron.svg'
import leftChevron from './assets/leftChevron.svg'

function Slider() {
  const slider = useRef()
  const sliderLine = useRef()

  let count = 0
  let interval = null

  const [widthOnePhoto, setWidthOnePhoto] = useState('100%')

  useEffect(() => {
    setWidthOnePhoto(slider.current.offsetWidth)

    //задаю всем фото одинаковую длину
    sliderLine.current.querySelectorAll('img').forEach(
      (photo) => {
        photo.style.width = widthOnePhoto + 'px'
        // auto - чтобы сохранилась пропорция картинки
        photo.style.height = 'auto'
      },
      [widthOnePhoto]
    )

    try {
      window.addEventListener('resize', () =>
        setWidthOnePhoto(slider.current.offsetWidth)
      )
    } catch (e) {
      console.log(e)
    }

    rollSlider()
    intervalReset()
  }, [widthOnePhoto])

  const rollSlider = () => {
    //смещаем слайдер на 1 ширину
    sliderLine.current.style.transform = `translate(-${
      count * widthOnePhoto
    }px)`
  }

  const onNextSlide = () => {
    count++
    if (count >= sliderPhotos.length) {
      count = 0
    }

    rollSlider()
    clearInterval(interval)
    intervalReset()
  }

  const onPrevSlide = () => {
    count--
    if (count < 0) {
      count = sliderPhotos.length - 1
    }

    rollSlider()
    clearInterval(interval)
    intervalReset()
  }

  //автопереключение слайдов
  function intervalReset() {
    interval = setInterval(() => {
      count++
      if (count >= sliderPhotos.length) {
        count = 0
      }
      rollSlider()
    }, 15000)
  }

  //переключение слайда по свайпу
  let touchX = null
  let touchY = null

  function handleTouchStart(e) {
    //получаю координаты точки касания
    touchX = e.touches[0].clientX
    touchY = e.touches[0].clientY
  }

  function handleTouchMove(e) {
    //если движения не было то false
    if (!touchX) {
      return false
    }
    //получаю координаты после движения
    let touchXmove = e.touches[0].clientX
    let touchYmove = e.touches[0].clientY

    //смотрю разницу координат до и после по модулю, чтобы узнать в какую сторону движение
    let divX = touchX - touchXmove
    let divY = touchY - touchYmove
    //если divX больше, то движение влево иначе вправо
    if (Math.abs(divX) > Math.abs(divY)) {
      //если divX > 0, то движение влево
      if (divX > 0) {
        onNextSlide()
        clearInterval(interval)
        intervalReset()
      } else {
        onPrevSlide()
        clearInterval(interval)
        intervalReset()
      }
    }

    touchX = null
    touchY = null
  }

  return (
    <section className={classes.Slider}>
      <div className={container.container}>
        <div
          ref={slider}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchMove={(e) => handleTouchMove(e)}
          className={classes.SliderBlock}
        >
          <div ref={sliderLine} className={classes.sliderLine}>
            {sliderPhotos.map((photo, index) => (
              <img
                key={index + Math.random()}
                src={photo.image}
                alt={photo.alt}
                loading={photo.loading}
              />
            ))}
          </div>

          <button
            onClick={onPrevSlide}
            className={classes.sliderPrev}
            aria-label="prev"
          >
            <ReactSVG src={leftChevron} />
          </button>

          <button
            onClick={onNextSlide}
            className={classes.sliderNext}
            aria-label="next"
          >
            <ReactSVG src={chevron} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Slider
