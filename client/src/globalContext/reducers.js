import {
  SAVE_WORD
} from './types'

const initialState = {
  searches: []
}

export default function rootReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SAVE_WORD: {
      return {
        ...state,
        searches: [...state.searches, payload]
      }
    }
    default:
      return state
  }
}
