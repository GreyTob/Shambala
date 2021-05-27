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
    let count = images.length - 1
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
    document
      .querySelector('#sliderNext')
      .addEventListener('click', function () {
        count++
        if (count >= images.length) {
          count = 0
        }
        rollSlider()
      })
    document
      .querySelector('#sliderPrev')
      .addEventListener('click', function () {
        count--
        if (count < 0) {
          count = images.length - 1
        }
        rollSlider()
      })

    //автопереключение
    setInterval(() => {
      count--
      if (count < 0) {
        count = images.length - 1
      }
      rollSlider()
    }, 15000)

    function rollSlider() {
      //смещаем слайдер на 1 ширину
      sliderLine.style.transform = 'translate(-' + count * width + 'px)'
    }
  }

  render() {
    return (
      <div className={container.container}>
        <div id="slider" className={classes.Slider}>
          <div id="sliderLine" className={classes.sliderLine}>
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" />
            <img src={img5} alt="img5" />
          </div>
          <button id="sliderPrev" className={classes.sliderPrev}>
            <ReactSVG src={leftChevron} />
          </button>
          <button id="sliderNext" className={classes.sliderNext}>
            <ReactSVG src={chevron} />
          </button>
        </div>
      </div>
    )
  }
}
export default Slider
