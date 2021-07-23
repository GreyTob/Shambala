import classes from './About.module.scss'
import container from '../../index.module.scss'

const About = () => (
  <section className={classes.About}>
    <div className={container.container}>
      <div id="about" className={classes.content}>
        <h2>О нас</h2>

        <p className={classes}>
          Наша студия для тех кто следит за своим здоровьем (или только
          собирается им заняться), для тех кто увлечен ЙОГОЙ, для тех кто любит
          двигаться и ТАНЦЕВАТЬ, для тех кто за позитивное ОБЩЕНИЕ и вкусные
          чаепития! ПРИХОДИ, открой свою Шамбалу!
        </p>

        <p>
          <strong>Йога представлена следующими направлениями:</strong>
          <br />- Антигравитационная йога (йога в гамаках)
          <br />- Акройога/акробаланс <br />- Табата
          <br />- Шпагаты
          <br />- Стройнею с йогой
          <br />- Группа здоровья 55+
          <br />- Мамина йога (мама с малышом +3м)
          <br />- Хатха-йога для начинающих
          <br />- Хатха-йога для продолжающих
          <br />- Суставная гимнастика по Бубновскому
          <br />- Табата (фитнес)
          <br />- Power-yoga (Силовая йога)
          <br />- Детская йога в гамаках
          <br />- Секция Реального айкидо (с 4 лет до 99 :)
        </p>

        <p>
          Сдаем студию в аренду под детские или взрослые ТРЕЗВЫЕ праздники! :
        </p>
      </div>
    </div>
  </section>
)

export default About
