import { BURGER_ACTIVE_TOGGLE } from '../actions/actionTypes'

const initialState = {
  burgerActive: false,
}

export function burgerActive(state = initialState, action) {
  switch (action.type) {
    case BURGER_ACTIVE_TOGGLE:
      return {
        ...state,
        burgerActive: !state.burgerActive,
      }
    default:
      return state
  }
}
