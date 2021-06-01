import React from 'react'
import classes from './Slider.module.scss'
import container from '../../index.module.scss'
import { ReactSVG } from 'react-svg'

import img1 from './assets/111.jpg'
import img2 from './assets/112.jpg'
import img3 from './assets/113.jpg'
import img4 from './assets/114.jpg'
import img5 from './assets/115.jpg'

import chevron from './assets/chevron.svg'
import leftChevron from './assets/leftChevron.svg'

class Slider extends React.Component {
  componentDidMount() {
    //делаю слайдер
    const images = document.querySelectorAll('#sliderLine img')
    const sliderLine = document.querySelector('#sliderLine')
    let count = 0
    let width

    const init = () => {
      //получаем ширину слайдера
      width = document.querySelector('#slider').offsetWidth

      //задаем общую ширину sliderLine (ширина всех картинок)
      sliderLine.getElementsByClassName.width = width * images.length + 'px'
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
      //если divX больше, то движение влево или вправо
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

  render() {
    return (
      <section className={classes.Slider}>
        <div className={container.container}>
          <div id="slider" className={classes.SliderBlock}>
            <div id="sliderLine" className={classes.sliderLine}>
              <img src={img1} alt="img1" />
              <img src={img2} alt="img2" loading="lazy" />
              <img src={img3} alt="img3" loading="lazy" />
              <img src={img4} alt="img4" loading="lazy" />
              <img src={img5} alt="img5" loading="lazy" />
            </div>
            <button id="sliderPrev" className={classes.sliderPrev}>
              <ReactSVG src={leftChevron} />
            </button>
            <button id="sliderNext" className={classes.sliderNext}>
              <ReactSVG src={chevron} />
            </button>
          </div>
        </div>
      </section>
    )
  }
}
export default Slider
