import React from 'react'
import classes from './Slider.module.scss'
import container from '../../index.module.scss'

import asd1 from './assets/111.jpg'
import asd2 from './assets/112.jpg'
import asd3 from './assets/113.jpg'
import asd4 from './assets/114.jpg'
import asd5 from './assets/115.jpg'

class Slider extends React.Component {
  state = {
    img: [{ src: 'ссылка', alt: 'текст' }],
  }

  componentDidMount() {
    //делаем слайдер
    const images = document.querySelectorAll('#sliderLine img')
    const sliderLine = document.querySelector('#sliderLine')
    let count = images.length - 1
    let width

    const init = () => {
      console.log('rezine')
      //получаем ширину слайдера
      width = document.querySelector('#slider').offsetWidth
      console.log(width)

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
    }, 5000)

    function rollSlider() {
      //смещаем слайдер на 1 ширину
      console.log('rollslider')
      sliderLine.style.transform = 'translate(-' + count * width + 'px)'
    }
  }

  render() {
    return (
      <div className={container.container}>
        <div id="slider" className={classes.Slider}>
          <div id="sliderLine" className={classes.sliderLine}>
            <img src={asd1} alt="1" />
            <img src={asd2} alt="2" />
            <img src={asd3} alt="3" />
            <img src={asd4} alt="4" />
            <img src={asd5} alt="5" />
          </div>
        </div>
        <button id="sliderPrev" className={classes.sliderPrev}>
          Назад
        </button>
        <br />
        <button id="sliderNext" className={classes.sliderNext}>
          Вперед
        </button>
      </div>
    )
  }
}
export default Slider
