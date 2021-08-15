import classes from './Main.module.scss'

import About from '../../components/About/About'
import Slider from '../../components/Slider/Slider'
import Contacts from '../../components/Contacts/Contacts'
import Teachers from '../../components/Teachers/Teachers'
import Form from '../../components/Form/Form'
import GoogleMap from '../../components/GoogleMap/GoogleMap'

const Main = () => (
  <section className={classes.Main}>
    <About />
    <Slider />
    <Teachers />
    <Contacts />
    <Form />
    <GoogleMap />
  </section>
)

export default Main
