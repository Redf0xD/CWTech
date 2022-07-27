import {
  SAVE_WORD
} from './types'
import { URL } from '../url'
let id = 0
export const getWord = (word) => {
  return async (dispatch) => {
    const res = await window.fetch(`${URL}/iecho?text=${word}`)
    const data = await res.json()
    dispatch({ type: SAVE_WORD, payload: { ...data, id: id++ } })
  }
}
