import classes from './Form.module.scss'
import container from '../../index.module.scss'
import Button from '../UI/Button/Button'
import is from 'is_js'

const Form = () => {
  function submitHandler(event) {
    console.log('preventDefault')
    event.preventDefault()
  }

  return (
    <section className={classes.Form}>
      <div className={container.container}>
        <div className={classes.content}>
          <h2>Отправте сообщение</h2>
          <form
            method="post"
            name="contact_form"
            action="#"
            onSubmit={(Event) => submitHandler(Event)}
          >
            <div className={classes.group}>
              <input type="text" name="name" id="formName" required />
              <span className={classes.bar}></span>
              <label htmlFor="formName">Как Вас зовут? </label>
              {/* <span className={classes.error}>Имя слишком короткое!</span> */}
            </div>

            <div className={classes.group}>
              <input type="email" name="name" id="formEmail" required />
              <span className={classes.bar}></span>
              <label htmlFor="formEmail">
                Ваш E-mail:&nbsp;
                {/* <span className={classes.error}>E-mail некорректный!</span> */}
              </label>
            </div>

            <div className={classes.group}>
              <input type="tel" name="name" id="formTel" required />
              <span className={classes.bar}></span>
              <label htmlFor="formTel">
                Ваш телефон:&nbsp;
                {/* <span className={classes.error}>Телефон некорректный!</span> */}
              </label>
            </div>

            <div className={classes.group}>
              <textarea
                name="message"
                id="formMessage"
                placeholder="Текст сообщения"
                resize="vertical"
                required
              ></textarea>
              <span className={classes.bar}></span>
              {/* <span className={classes.error}>
                Сообщение должно быть длиннее трех символов
              </span> */}
            </div>
            <Button type="submit" value={'Отправить'} />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
