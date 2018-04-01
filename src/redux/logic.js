// @flow
import { createLogicMiddleware } from 'redux-logic'
import { logic as IntlLogic } from '../ducks/intl'

export const logicMiddleware = () => {
  const logic = [...IntlLogic]
  return createLogicMiddleware(logic)
}