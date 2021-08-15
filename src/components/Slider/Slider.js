import React from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'

import './Slider.scss'
import container from '../../index.module.scss'

import { sliderPhotos } from './sliderPhotos'

const Slider = () => (
  <section className={container.container}>
    <Carousel autoplay={true} effect="fade">
      {sliderPhotos.map((photo) => (
        <div key={photo.alt}>
          <img src={photo.image} alt={photo.alt} loading={photo.loading} />
        </div>
      ))}
    </Carousel>
  </section>
)

export default Slider
