// @flow
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { setLocale } from '../ducks/intl'
import type { Locale } from '../types'

export default compose(
  connect(
    state => ({}),
    dispatch => ({
      setLocale: async (locale: Locale) => dispatch(setLocale(locale))
    })
  ),
  withHandlers({
    onLangChange: props => (lang: Locale) => {
      props.setLocale(lang)
    }
  })
)(Navbar)
