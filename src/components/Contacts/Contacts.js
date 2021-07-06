import classes from './Contacts.module.scss'
import container from '../../index.module.scss'

const Contacts = () => (
  <section id="contacts" className={classes.Contacts}>
    <div className={container.container}>
      <div className={classes.content}>
        <h2>Свяжитеcь с нами</h2>

        <span className={classes.shambala}>Шамбала</span>

        <span>г. Магнитогорск ул. Б.Ручьева , 15а</span>

        <span>
          Тел.:&nbsp;
          <a href="tel:+73519430470">+7&nbsp;(3519)&nbsp;43-04-70</a>
        </span>

        <span>
          Email:&nbsp;
          <a href="mailto:mail@mail.ru">нужна@почта.или нет?</a>
        </span>
      </div>
    </div>
  </section>
)

export default Contacts
