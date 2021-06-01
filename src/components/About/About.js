import classes from './About.module.scss'
import container from '../../index.module.scss'

import { Link } from 'react-scroll'

const About = () => {
  return (
    <section className={classes.About}>
      <div className={container.container}>
        <div id="about" className={classes.content}>
          <h2>О нас</h2>
          <Link
            style={{
              cursor: 'pointer',
              padding: 40,
              color: 'red',
              textTransform: 'uppercase',
            }}
            to="contacts"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-50}
            duration={500}
            delay={50}
          >
            Проверка react-scroll
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            architecto cum non eos illum odit provident, totam cumque dolorem
            quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quibusdam quas, officia, deleniti cumque ea molestiae perspiciatis
            illo animi tempore corrupti voluptas! Autem, quidem neque
            perspiciatis, modi ipsa dolorem a fugiat dolore qui maxime expedita
            eum explicabo cum minus. Aspernatur.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
