import {
  LOADING,
  SAVE_WORD
} from './types'

const initialState = {
  searches: [],
  loading: false
}

export default function rootReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SAVE_WORD: {
      return {
        ...state,
        searches: [payload, ...state.searches],
        loading: false
      }
    }
    case LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    default:
      return state
  }
}
