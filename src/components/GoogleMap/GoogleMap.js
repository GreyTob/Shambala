import classes from './GoogleMap.module.scss'
import container from '../../index.module.scss'

const GoogleMap = () => (
  <section className={classes.iframe}>
    <div className={container.container}>
      <iframe
        title="googleMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.5525148434376!2d58.971306815583986!3d53.36916298070341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d12e5b5be89dff%3A0x1eaf4d919484a4f!2z0KjQsNC80LHQsNC70LA!5e0!3m2!1sru!2sru!4v1621848228383!5m2!1sru!2sru"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>
)

export default GoogleMap
