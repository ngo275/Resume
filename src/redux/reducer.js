// @flow
import { combineReducers } from 'redux'
import {
  key as intlKey,
  reducer as intlReducer
} from '../ducks/intl'

export const configureReducer = () => {
  return combineReducers({
    [intlKey]: intlReducer
  })
}