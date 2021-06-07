import classes from './Form.module.scss'
import container from '../../index.module.scss'

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
            <label htmlFor="formName">Как Вас зовут?</label>
            <input type="text" name="name" id="formName" />
            <label htmlFor="formEmail">Ваш E-mail: </label>
            <input type="text" name="email" id="formEmail" />
            <label htmlFor="formMessage"></label>
            <textarea name="message" id="formMessage"></textarea>
            <input type="submit" value="Отправить" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
