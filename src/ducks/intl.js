// @flow

import type { Action, Locale } from '../types'
import { createLogic } from 'redux-logic'
import intl from 'react-intl-universal'
import { Locales } from '../types'

export const key: string = 'intl'

const locales = {
  'en-US': require('../locales/en-US.json'),
  'ja-JP': require('../locales/ja-JP.json'),
  'zh-CN': require('../locales/zh-CN.json'),
}

type InitialState = {
  initialized: boolean,
  isLoading: boolean,
  locale: Locale,
}

const initialState: InitialState = {
  initialized: false,
  isLoading: false,
  locale: locales['ja-JP'],
}

// Actions
const INITIALIZE = '@intl/INITIALIZE'
const INITIALIZED = '@intl/INITIALIZED'
const SET_LOCALE = '@intl/SET_LOCALE'

export const initialize = () => {
  return {
    type: INITIALIZE,
    payload: {}
  }
}

const initialized = () => {
  return {
    type: INITIALIZED,
    payload: {}
  }
}

export const setLocale = (locale) => {
  return {
    type: SET_LOCALE,
    payload: {
      locale: locale,
    }
  }
}

// Reducer
export const reducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, isLoading: true }
    case INITIALIZED:
      return { ...state, initialized: true, isLoading: false }
    case SET_LOCALE:
      return { ...state, locale: action.payload.locale }
  }
}

// Logics
const initializeLogic = createLogic({
  type: INITIALIZE,
  latest: true,

  process({ getState, action }, dispatch, done) {
    let agentLocale = intl.determineLocale({
      urlLocaleKey: 'lang',
      cookieLocaleKey: 'lang',
    })

    if (Object.keys(locales).findIndex( v => v === agentLocale ) === -1) {
      agentLocale = Locales['ja-JP']
    }

    intl.init({
      currentLocale: agentLocale,
      locales
    }).then(() => {
      dispatch(initialized())
      done()
    })
  }
})

const setLocaleLogic = createLogic({
  type: SET_LOCALE,
  latest: true,

  process({ action }, dispatch, done) {
    window.location.search = `?lang=${action.payload.locale}`
    done()
  }
})

export const logic = [
  initializeLogic,
  setLocaleLogic,
]