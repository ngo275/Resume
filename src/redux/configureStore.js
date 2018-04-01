// @flow
import { createStore, compose, applyMiddleware } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { configureReducer } from './reducer'
import { reducer } from '../ducks/intl'
import logic from './logic'

const logicMiddleware = createLogicMiddleware(logic)

const middleware = applyMiddleware(logicMiddleware)

// const enhancer = (typeof devToolsExtension !== 'undefined') ?
//   compose(
//     middleware,
//     devToolsExtension()
//   ) :
//   middleware

const enhancer = middleware

export default function configureStore() {
  const store = createStore(reducer, enhancer)
  return store
}