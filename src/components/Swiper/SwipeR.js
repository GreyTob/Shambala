// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import classes from './SwipeR.module.scss'

import asd1 from '../Slider/assets/111.jpg'
import asd2 from '../Slider/assets/112.jpg'
import asd3 from '../Slider/assets/113.jpg'
import asd4 from '../Slider/assets/114.jpg'
import asd5 from '../Slider/assets/115.jpg'

const SwipeR = () => {
  return (
    <Swiper
      className={classes.SwipeR}
      spaceBetween={0}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      loop={true}
    >
      <SwiperSlide>
        <img src={asd1} alt="fsg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={asd2} alt="fsgg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={asd3} alt="fseg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={asd4} alt="fresg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={asd5} alt="fsfg" />
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default SwipeR
