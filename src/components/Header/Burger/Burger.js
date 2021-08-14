import { connect } from 'react-redux'

import { burgerActiveToggle } from '../../../redux/actions/actions'

import classes from './Burger.module.scss'

const Burger = (props) => (
  <div
    className={props.burgerActive ? classes.BurgerActive : classes.Burger}
    onClick={props.burger}
  >
    <span />
  </div>
)

function mapStateToProps(state) {
  return {
    burgerActive: state.burgerActive.burgerActive,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    burger: () => dispatch(burgerActiveToggle()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Burger)
