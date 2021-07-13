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
  const [widthOnePhoto, setWidthOnePhoto] = useState('100%')
  const [commonPhotosWidth, setCommonPhotoWidth] = useState()

  useEffect(() => {
    setWidthOnePhoto(slider.current.offsetWidth)
    setCommonPhotoWidth(widthOnePhoto * sliderPhotos.length + 'px')

    //присваиваю всем фото одинаковую длину
    sliderLine.current.querySelectorAll('img').forEach((photo) => {
      photo.style.width = widthOnePhoto + 'px'
      // auto - чтобы сохранилась пропорция картинки
      photo.style.height = 'auto'
    })

    rollSlider()
  })

  function rollSlider() {
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
  }

  const onPrevSlide = () => {
    count--
    if (count < 0) {
      count = sliderPhotos.length - 1
    }
    rollSlider()
  }

  return (
    <section className={classes.Slider}>
      <div className={container.container}>
        <div ref={slider} className={classes.SliderBlock}>
          <div ref={sliderLine} className={classes.sliderLine}>
            {sliderPhotos.map((photo, index) => (
              <img
                key={index + Math.random()}
                src={photo.image}
                alt={photo.alt}
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

/*
componentDidMount() {
  //делаю слайдер
  const images = document.querySelectorAll('#sliderLine img') == sliderPhotos
  const sliderLine = document.querySelector('#sliderLine') ==s liderLine
  let count = 0 == sliderPhotos.length
  let width

  const init = () => {
    //получаем ширину слайдера
    try {
      width = document.querySelector('#slider').offsetWidth
    } catch (e) {
      console.log(e)
    }

    //задаем общую ширину sliderLine (ширина всех картинок)
    sliderLine.getElementsByClassName.width = width * images.length + 'px' == commonPhotoWidth
    //перебираем картинки и присваиваим одинаковую длину
    images.forEach((item) => {
      item.style.width = width + 'px'
      //auto - чтобы сохранилась пропорция картинки
      item.style.height = 'auto'
    })
    //вызываю rollSlider() чтобы изображение встало ровно после изменениея размера экрана
    rollSlider()
  }

  //запуск функции при изменение размера окна
  window.addEventListener('resize', init)
  init()

  //события на кнопки
  const sliderNext = () => {
    count++
    if (count >= images.length) {
      count = 0
    }
    rollSlider()
  }
  const sliderPrev = () => {
    count--
    if (count < 0) {
      count = images.length - 1
    }
    rollSlider()
  }

  document.querySelector('#sliderNext').addEventListener('click', sliderNext)

  document.querySelector('#sliderPrev').addEventListener('click', sliderPrev)

  function rollSlider() {
    //смещаем слайдер на 1 ширину
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'
  }

  //автопереключение
  setInterval(() => {
    count++
    if (count >= images.length) {
      count = 0
    }
    rollSlider()
  }, 15000)

  //переключение слайда по свайпу
  let touchX = null
  let touchY = null

  document
    .querySelector('#slider')
    .addEventListener('touchstart', handleTouchStart, false)

  document
    .querySelector('#slider')
    .addEventListener('touchmove', handleTouchMove, false)

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
        sliderNext()
      } else sliderPrev()
    }

    touchX = null
    touchY = null
  }
}
*/
