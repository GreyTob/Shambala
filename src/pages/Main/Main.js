import React, { Component } from 'react'
import classes from './Main.module.scss'
import contain from '../../index.module.scss'
// export anchors from '../../components/anchors/anchors'

import About from '../../components/About/About'
import Slider from '../../components/Slider/Slider'
// import SwipeR from '../../components/Swiper/SwipeR'

class Main extends Component {
  render() {
    return (
      <section className={classes.Main}>
        <div className={contain.contain}>
          <p style={{ width: 300, margin: '0 auto' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            adipisci aut? Deserunt corporis praesentium earum maxime ea
            consequatur, iste, possimus eum distinctio labore animi amet,
            recusandae obcaecati aperiam perspiciatis sit id quidem optio odio
            ut enim officia suscipit. Repellat, numquam nam voluptatum unde a
            explicabo. Doloremque est voluptatibus ut natus accusamus voluptate
            sapiente nostrum rerum at! Consequuntur inventore nemo magni
            obcaecati incidunt ea officia nulla similique nobis veritatis?
            Beatae repellat doloribus architecto iusto exercitationem tempore,
            dolore cupiditate, deserunt tenetur neque eveniet vitae
            reprehenderit fugiat. Illum maiores dolorem facere reiciendis
            suscipit tenetur amet culpa fugiat earum maxime praesentium cum
            soluta iure nobis aspernatur, rem laudantium eos modi expedita! Nam
            omnis eius quaerat autem doloremque at ipsum perspiciatis ipsa
            assumenda expedita explicabo iusto deleniti ducimus obcaecati,
            voluptatum quam facere molestiae dignissimos sapiente sed quos
            deserunt! Placeat voluptates maxime velit impedit distinctio omnis
            quos ipsam sapiente, quia eos itaque et optio amet nihil nostrum.
            Consectetur sequi inventore odit officia, aperiam ex ipsa hic
            aliquam esse blanditiis maxime excepturi distinctio minima eum eos
            perferendis mollitia reiciendis facilis quidem? Praesentium neque
            eligendi nisi tempora doloribus magnam sit harum, saepe quam
            accusantium reiciendis fugiat dicta vitae tenetur vel repudiandae
            minima voluptatem totam ea excepturi! Maiores, impedit?
          </p>
          <About />
          <Slider />
          {/* <SwipeR /> */}
        </div>
      </section>
    )
  }
}

export default Main
