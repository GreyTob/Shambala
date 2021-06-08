import classes from './Form.module.scss'
import container from '../../index.module.scss'
import Button from '../UI/Button/Button'

const Form = () => {
  //   var frmvalidator  = new Validator("contactform");
  // frmvalidator.addValidation("name","req","Please provide your name");
  // frmvalidator.addValidation("email","req","Please provide your email");
  // frmvalidator.addValidation("email","email",
  //   "Please enter a valid email address");

  function submitHandler(event) {
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
            action="contact-form-handler.php"
            onSubmit={submitHandler}
          >
            <div class={classes.group}>
              <input type="text" name="name" id="formName" required />
              <span class={classes.bar}></span>
              <label htmlFor="formName">Как Вас зовут?</label>
            </div>

            <div class={classes.group}>
              <input type="email" name="name" id="formEmail" required />
              <span class={classes.bar}></span>
              <label htmlFor="formEmail">Ваш E-mail:&nbsp;</label>
            </div>

            <div class={classes.group}>
              <input type="tel" name="name" id="formTel" required />
              <span class={classes.bar}></span>
              <label htmlFor="formTel">Ваш телефон:&nbsp;</label>
            </div>

            <div class={classes.group}>
              <textarea
                name="message"
                id="formMessage"
                placeholder="Текст сообщения"
                resize="vertical"
                required
              ></textarea>
              <span class={classes.bar}></span>
            </div>
            {/* <input type="submit" value="Отправить" /> */}
            <Button value={'Отправить'} />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
