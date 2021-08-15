import { connect } from 'react-redux'
import { burgerActiveToggle } from '../../../redux/actions/actions'

import classes from './Burger.module.scss'

const Burger = ({ burgerActive, burgerActiveToggle }) => (
  <div
    className={burgerActive ? classes.BurgerActive : classes.Burger}
    onClick={burgerActiveToggle}
  >
    <span />
  </div>
)

function mapStateToProps(state) {
  return {
    burgerActive: state.headerReducer.burgerActive,
  }
}

const mapDispatchToProps = {
  burgerActiveToggle,
}

export default connect(mapStateToProps, mapDispatchToProps)(Burger)
