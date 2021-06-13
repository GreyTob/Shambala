import classes from './Form.module.scss'
import './formSend.scss'
import container from '../../index.module.scss'
import Button from '../UI/Button/Button'
import $ from 'jquery'
// import is from 'is_js'

const Form = () => {
  function submitHandler(event) {
    event.preventDefault()
  }

  //отправка
  $(document).ready(function () {
    //E-mail Ajax Send
    $('form').submit(function () {
      //Change
      var th = $(this)
      $('.formSend').css('visibility', 'visible')
      $.ajax({
        // type: 'POST',
        // url: 'mail.php', //Change
        // data: th.serialize(),
      }).done(function () {
        // alert('Сообщение отправлено')
        $('.formSend').html('<h3>Отправлено</h3>')
        setTimeout(function () {
          // Done Functions
          $('.formSend').css('visibility', 'hidden')
          th.trigger('reset')
        }, 1500)
      })
      return false
    })
  })

  return (
    <section className={classes.Form}>
      <div className={container.container}>
        <div className={classes.content}>
          <h2>Отправьте сообщение</h2>
          <form
            id="formModal"
            name="contact_form"
            action="#"
            onSubmit={(Event) => submitHandler(Event)}
          >
            {/* Hidden Required Fields ДЛЯ ОТПРАВКИ ФОРМЫ НА ПОЧТУ  */}
            <input type="hidden" name="project_name" value="Shambala" />
            <input
              type="hidden"
              name="admin_email"
              value="greytob@icloud.com"
            />
            <input type="hidden" name="form_subject" value="Form Subject" />
            {/* END Hidden Required Fields */}

            <div className={classes.group}>
              <input type="text" name="name" id="formName" required />
              <span className={classes.bar}></span>
              <label htmlFor="formName">Как Вас зовут? </label>
              {/* <span className={classes.error}>Имя слишком короткое!</span> */}
            </div>

            <div className={classes.group}>
              <input type="email" name="email" id="formEmail" required />
              <span className={classes.bar}></span>
              <label htmlFor="formEmail">
                Ваш E-mail:&nbsp;
                {/* <span className={classes.error}>E-mail некорректный!</span> */}
              </label>
            </div>

            <div className={classes.group}>
              <input type="tel" name="tel" id="formTel" required />
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
            <Button value={'Отправить'} />

            <div className="formSend">
              <h3>Отправка</h3>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
