// @flow
import { combineReducers } from 'redux'
import { reducer as IntlReducer } from '../ducks/intl'

export const configureReducer = () => {
  return combineReducers({
    IntlReducer
  })
}