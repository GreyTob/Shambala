import classes from './Logo.module.scss'
import LogoPicture from './assets/Logo.png'

const Logo = () => (
  <figure className={classes.Logo}>
    <div className={classes.picture}>
      <a href="/">
        <img
          className={classes.rotating}
          src={LogoPicture}
          alt="logo"
          loading="lazy"
        />
      </a>
    </div>

    <figcaption className={classes.figcaption}>
      Йога в Магнитогорске. Студия йоги "Шамбала"
    </figcaption>
  </figure>
)

export default Logo
