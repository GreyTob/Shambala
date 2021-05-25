import React from 'react'
import classes from './Slider.module.scss'

class Slider extends React.Component {
  state = {
    img: [{ src: 'ссылка', alt: 'текст' }],
  }

  render() {
    return (
      <div className={classes.Slider}>
        <div className={classes.sliderLine}>
          <img src="../../../../../public/assets/slider/1.jpg" alt="1" />
          <img src="../../../../../public/assets/slider/2.jpg" alt="2" />
          <img src="../../../../../public/assets/slider/3.jpg" alt="3" />
          <img src="../../../../../public/assets/slider/4.jpg" alt="4" />
        </div>
      </div>
    )
  }
}
export default Slider
