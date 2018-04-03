// @flow
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { initialize, setLocale } from '../ducks/intl'
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
      console.log(lang)
      props.setLocale(lang)
    }
  })
)(Navbar)
